export const SESSION_WINDOW_HOURS = 24;

export const CONSENT_QUESTION =
  'Do you want to receive updates on your complaint on WhatsApp?';

export const CONSENT_BUTTONS = [
  { id: 'CONSENT_YES', title: 'YES', consent: true },
  { id: 'CONSENT_NO', title: 'NO', consent: false },
];

export const APPROVED_META_TEMPLATES = {
  grievance_status_update_opted_in: {
    name: 'grievance_status_update_opted_in',
    language: 'en',
    requiredParams: ['name', 'ticket_id', 'department', 'status', 'status_url'],
  },
};

export function getConsentPrompt({ role, name, ticketId }) {
  const roleText =
    role === 'admin'
      ? 'for this grievance workflow'
      : 'for your grievance updates';

  return {
    channel: 'whatsapp',
    type: 'interactive',
    role,
    body: `${CONSENT_QUESTION}\n\n${roleText}`,
    context: {
      ticketId: ticketId ?? null,
      name: name ?? null,
      promptType: 'updates_opt_in',
    },
    buttons: CONSENT_BUTTONS,
  };
}

export function isInside24HourWindow(lastUserMessageAt, now = new Date()) {
  if (!lastUserMessageAt) return false;
  const elapsedMs = now.getTime() - new Date(lastUserMessageAt).getTime();
  return elapsedMs <= SESSION_WINDOW_HOURS * 60 * 60 * 1000;
}

export function saveConsent(store, { phoneNumber, consent, role, ticketId, source }) {
  const timestamp = new Date().toISOString();
  const existing = store.get(phoneNumber) || {};

  const record = {
    ...existing,
    phoneNumber,
    consent,
    role,
    ticketId,
    source,
    updatedAt: timestamp,
  };

  store.set(phoneNumber, record);
  return record;
}

export function resolveOutboundMessage({
  phoneNumber,
  lastUserMessageAt,
  consentStore,
  sessionMessage,
  templateName,
  templateParams,
  now = new Date(),
}) {
  if (isInside24HourWindow(lastUserMessageAt, now)) {
    return {
      mode: 'session',
      payload: sessionMessage,
      compliance: 'Within 24-hour window: session message allowed',
    };
  }

  const consentRecord = consentStore.get(phoneNumber);
  if (!consentRecord?.consent) {
    return {
      mode: 'blocked',
      payload: null,
      compliance: 'Outside 24-hour window and user has not opted in',
    };
  }

  const template = APPROVED_META_TEMPLATES[templateName];
  if (!template) {
    return {
      mode: 'blocked',
      payload: null,
      compliance: `Template ${templateName} is not in approved template map`,
    };
  }

  const missingParam = template.requiredParams.find((key) => !templateParams?.[key]);
  if (missingParam) {
    return {
      mode: 'blocked',
      payload: null,
      compliance: `Missing template param: ${missingParam}`,
    };
  }

  return {
    mode: 'template',
    payload: {
      type: 'template',
      template,
      params: templateParams,
    },
    compliance:
      'Outside 24-hour window: sending approved template with stored opt-in consent',
  };
}
