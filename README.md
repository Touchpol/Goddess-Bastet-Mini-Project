# MeowHaven

## Claude Code GitHub Action

1. Generate/rotate a Claude Code OAuth token (`claude setup-token`, or from the Anthropic Console).
2. In the GitHub repo: **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `CLAUDE_CODE_OAUTH_TOKEN`
   - Value: the token from step 1
3. The workflow at `.github/workflows/claude.yml` is already wired to that secret.

### Triggers

- Comment `@claude ...` on an issue or PR
- Any PR opened or updated
- Push to `main`
- Manual run from the Actions tab (`workflow_dispatch`)

Never commit a token value into this repo or into workflow YAML directly — only reference it via `${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}`.
