# Become AI — NOVA (Google Gemini)
Deploy this project to Cloudflare Pages.

Add an encrypted/secret environment variable:
- `GEMINI_API_KEY` = your Google Gemini API key

Optional:
- `GEMINI_MODEL` = `gemini-2.5-flash`

Then redeploy and open `/ask.html`.

The API key is used only by `functions/api/chat.js` and is NOT placed in frontend code.
If a key has been exposed, revoke/rotate it and use a fresh key as the Cloudflare secret.
