import {
  getConsentPrompt,
  resolveOutboundMessage,
  saveConsent,
} from '@/lib/whatsapp/grievanceFlow';

const consentStore = globalThis.__grievanceConsentStore || new Map();
globalThis.__grievanceConsentStore = consentStore;

export async function POST(request) {
  const body = await request.json();

  if (body.eventType === 'conversation_end') {
    const prompt = getConsentPrompt({
      role: body.role,
      name: body.name,
      ticketId: body.ticketId,
    });

    return Response.json({
      nextStep: 'collect_opt_in',
      message: prompt,
    });
  }

  if (body.eventType === 'opt_in_response') {
    const isOptedIn = body.buttonId === 'CONSENT_YES';

    const consentRecord = saveConsent(consentStore, {
      phoneNumber: body.phoneNumber,
      consent: isOptedIn,
      role: body.role,
      ticketId: body.ticketId,
      source: 'whatsapp_button',
    });

    return Response.json({
      nextStep: 'consent_saved',
      consent: consentRecord,
    });
  }

  if (body.eventType === 'status_update') {
    const decision = resolveOutboundMessage({
      phoneNumber: body.phoneNumber,
      lastUserMessageAt: body.lastUserMessageAt,
      consentStore,
      sessionMessage: {
        type: 'text',
        text: `Dear ${body.name}, your grievance (ID: ${body.ticketId}) submitted to ${body.department} is now ${body.status}.`,
      },
      templateName: 'grievance_status_update_opted_in',
      templateParams: {
        name: body.name,
        ticket_id: body.ticketId,
        department: body.department,
        status: body.status,
        status_url: body.statusUrl,
      },
    });

    return Response.json({
      nextStep: 'send_outbound_message',
      decision,
    });
  }

  return Response.json(
    {
      error: 'Unsupported event type',
      supportedEventTypes: ['conversation_end', 'opt_in_response', 'status_update'],
    },
    { status: 400 },
  );
}
