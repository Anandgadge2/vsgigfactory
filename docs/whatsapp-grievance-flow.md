# WhatsApp Grievance Flow (Citizen + Admin)

This flow enforces Meta-compliant behavior by:

1. Ending both **citizen** and **admin** conversations with explicit opt-in collection.
2. Storing consent tied to phone number, role, and grievance context.
3. Sending free-form session messages only inside the 24-hour customer care window.
4. Sending only approved templates outside the 24-hour window.

## Consent step at conversation end

Prompt:

> Do you want to receive updates on your complaint on WhatsApp?

Buttons:

- YES (`CONSENT_YES`)
- NO (`CONSENT_NO`)

## Message compliance logic

- If `lastUserMessageAt` is within 24 hours, send session message.
- If outside 24 hours:
  - Require stored user consent = true.
  - Require approved template name from `APPROVED_META_TEMPLATES`.
  - Require all required template variables.

## API contract

`POST /api/whatsapp/grievance`

### eventType: `conversation_end`
Returns the consent question payload for the current role (`citizen` or `admin`).

### eventType: `opt_in_response`
Consumes button response and stores consent.

### eventType: `status_update`
Evaluates whether to send session message or approved template.
