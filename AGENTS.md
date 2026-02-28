# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 14 (Pages Router) static blog** ("FUN YOU BLOG"). No database, Docker, or external backend services required.

### Tech stack
- **Node.js** v24.8.0 (see `.nvmrc`)
- **Yarn 4.12.0** (Berry, `node-modules` linker; bundled at `.yarn/releases/yarn-4.12.0.cjs`)
- **Next.js 14.1.3**, React 18, TypeScript
- Content is Markdown files under `content/posts/` parsed at build time via `remark` + `gray-matter`

### Common commands
| Task | Command |
|---|---|
| Install deps | `yarn install` |
| Dev server | `yarn dev` (port 3000) |
| Lint | `yarn lint` |
| Build | `yarn build` (runs `next build && next-sitemap`) |
| Component tests | `yarn test-ct` (Playwright CT, chromium) |
| Storybook | `yarn storybook` (port 6006) |
| Text lint (Japanese) | `yarn textlint` |

### Gotchas
- **Playwright visual snapshot test**: `Pager-visual-comparisons.spec.tsx` will fail on first run in a fresh environment because the baseline screenshot (`__snapshots__/`) does not exist yet. Run `yarn test-ct --update-snapshots` to generate it, then re-run.
- **Playwright browsers**: Install with `npx playwright install chromium` (do NOT use `--with-deps` on Ubuntu Noble — `libasound2` virtual package causes errors). The required system deps are pre-installed in the Cloud VM.
- **Corepack**: Must be enabled (`corepack enable`) before `yarn install` if using nvm-managed Node.
- **No environment variables required** for local dev. `GA_TRACKING_ID` is only used in production.
