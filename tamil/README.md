# Tamil Command Quiz

Minimal quiz app for English -> Tamil command practice.

## Run

1. Open `/Users/karthikbalasubramanian/Library/CloudStorage/GoogleDrive-karthik@balasubramanian.us/My Drive/Sandbox/Visualizer/Tamil Practice/index.html`
2. If microphone access from `file://` is blocked, run:
   - `python3 -m http.server 8000`
   - open `http://localhost:8000`

## Main behavior

- Default display mode is Standard; low vision focus mode is optional in Settings -> Display.
- Default quiz style is respectful Tamil.
- Respect mode options: with respect, without respect, mixed random.
- Phrase polarity options: positive, negative, or both mixed.
- Audio priority:
  - real recorded clip first
  - fallback (`Mac Basic` or `Cloud TTS`) only when clip is missing

## Keyboard shortcuts

- `L`: Listen
- `R`: Reveal
- `N`: Next
- `S`: Open settings
- `Esc`: Close settings
- `H`: Open docs help
- `?`: Toggle in-app shortcut sheet
- `D`: Toggle Standard / Low vision mode
- `M`: Cycle respect mode
- `P`: Cycle phrase polarity mode
- `F`: Cycle fallback audio mode

Inside settings drawer:
- `V`: Start/stop recording for selected phrase
- `K`: Play selected recorded clip
- `Cmd/Ctrl + S`: Save cloud audio settings

## GitHub deployment (Pages)

This project now includes:
- `.github/workflows/deploy-pages.yml` for automatic GitHub Pages deployment on push to `main`/`master`
- `.nojekyll` so static assets/pages are served as-is

To publish:
1. Push this project to GitHub.
2. In GitHub repo settings, enable **Pages** using **GitHub Actions** as the source.
3. Push to `main` (or `master`) to deploy.

## Help and documentation

- In-app help page: `/Users/karthikbalasubramanian/Library/CloudStorage/GoogleDrive-karthik@balasubramanian.us/My Drive/Sandbox/Visualizer/Tamil Practice/docs.html`
- Main app: `/Users/karthikbalasubramanian/Library/CloudStorage/GoogleDrive-karthik@balasubramanian.us/My Drive/Sandbox/Visualizer/Tamil Practice/index.html`

## Change summary (February 8, 2026)

- Implemented a minimal quiz loop with one English prompt and four Tamil options per round.
- Set defaults to `Standard` display and respectful Tamil phrasing.
- Added respect filtering (`respectful`, `casual`, `mixed`) and polarity filtering (`positive`, `negative`, `mixed`).
- Expanded the phrase bank to 76 command sets (304 generated variants) across respectful/casual and positive/negative forms.
- Updated several romanized forms to better reflect colloquial pronunciation cues.
- Moved controls out of the main quiz area into a settings drawer to keep the quiz UI uncluttered.
- Added low-vision focus mode for high zoom usage while keeping standard mode as default.
- Added full keyboard navigation for answering and app control: `1-4`, arrow keys, `Enter`, `B`, `L`, `R`, `N`, `S`, `Esc`, `H`, `?`, `D`, `M`, `P`, `F`.
- Added settings-only recording shortcuts: `V` (record start/stop), `K` (play selected clip), `Cmd/Ctrl + S` (save cloud audio settings).
- Added teacher-recording-mode shortcuts: `V` record start/stop, `X` stop, `K` play saved clip, `Delete` remove clip, `←/→` move phrase.
- Implemented local real-audio library workflow (record/upload/play/delete) with browser persistence.
- Added a dedicated `Teacher recording mode` (UI mode) for fast human-teacher voice capture on the main screen with sequential phrase navigation and live clip status.
- Added fallback speech layers: `Mac Basic TTS` and `Cloud TTS (OpenAI)`, with real recordings always playing first when present.
- Added reinforcement flow on correct answers: success tone, phrase playback, then automatic next question.
- Added Tamil spoken "try again" prompt on wrong answers with a slightly negative tone.
- Changed feedback to pill-state highlighting only (correct/wrong/reveal) and removed the bottom `Answer:` text line.
- Enabled retry after wrong picks instead of locking the round immediately.
- Added quiz `Back` button with `B` shortcut to return to previously shown questions in the same session.
- Updated `Reveal` behavior to swap only the bold Tamil segment with bold English in each option pill while keeping the number prefix, divider, and romanized Tamil in place.
- Added stronger question-level visual cues for respect while removing explicit polarity indicator from the quiz header (polarity still available as a setting).
- Adjusted Tamil + romanized layout to stay on one line with explicit separator spacing at high zoom levels.
- Added dedicated help/shortcut surfaces so documentation is available without adding UI clutter.
- Added GitHub Pages deployment setup (`.github/workflows/deploy-pages.yml`, `.nojekyll`).
