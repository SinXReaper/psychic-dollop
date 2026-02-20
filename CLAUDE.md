# ClarityPath — Dementia Diagnosis Journey Tracker

## Project Overview
A mobile web app for families navigating the dementia diagnosis process in Singapore, built for the President's Challenge. Features a 5-tab interface, AI assistant (Clara), dark/light theming, and 4-language support.

## File Structure
- `index.html` — App shell with all 5 tab sections, bottom nav, Clara overlay, document viewer modal
- `styles.css` — Full design system using CSS custom properties for light/dark theming, animations, responsive layout
- `app.js` — Core logic: state management, tab routing, rendering, mock data (Singapore healthcare), event handling
- `translations.js` — 4-language support (English, Chinese, Malay, Tamil) with `applyTranslations()` and `t()` helper
- `clara.js` — Clara AI assistant powered by OpenRouter API (Qwen 3 235B model), with fallback responses
- `app.html` / `mindmap.html` — Original static mindmap (legacy, not part of the app)

## Key Features
- **5 tabs**: Home (dashboard + progress), Notifications (filterable), Messages (chat), Documents (viewer), Settings
- **Clara AI**: Floating chat assistant using OpenRouter API, responds in user's language, references actual app data
- **Theming**: Light/dark mode via CSS custom properties on `[data-theme]`
- **i18n**: All UI strings translated via `data-i18n` attributes; dynamic content uses `t(key, vars)` helper
- **Mock data**: Patient "Tan Ah Kow", care coordinator "Dr. Lim Wei Ming", 12 notifications, 8 messages, 6 documents

## Development
- Run `python -m http.server 8080` in the project directory
- Open `http://localhost:8080/index.html` in a browser
- Mobile-first design (max-width 480px), use Chrome DevTools device mode for best preview
- State persisted in localStorage: theme, language, API key, read notifications
