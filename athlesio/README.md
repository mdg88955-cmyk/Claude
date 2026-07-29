# Athlesio — Handoff Package

Everything from the 29 July 2026 session, packaged so Claude Code (or any agent)
can pick the project up cold.

```
CLAUDE.md          <- start here. Claude Code reads this automatically.
SESSION-LOG.md     <- decision record, including what went wrong and why
docs/              <- compliance research, brand system, product copy, shop pages
skills/            <- 11 agent skills, complete with their bundled scripts and data
theme/             <- the Shopify Online Store 2.0 theme, source form
```

## Using it with Claude Code

```bash
# 1. Put this folder at the root of your project
cd athlesio-handoff

# 2. Claude Code picks up CLAUDE.md automatically
claude

# 3. Install the skills globally so any project can use them
npx skills add obra/superpowers@brainstorming -g -y
npx skills add vercel-labs/skills@find-skills -g -y
npx skills add anthropics/skills@frontend-design -g -y
npx skills add anthropics/skills@skill-creator -g -y
npx skills add mattpocock/skills@grill-me -g -y
npx skills add nextlevelbuilder/ui-ux-pro-max-skill@ui-ux-pro-max -g -y
npx skills add shopify/shopify-ai-toolkit@shopify-storefront-graphql -g -y
npx skills add vercel-labs/agent-browser@agent-browser -g -y
npx skills add vercel-labs/agent-skills@vercel-react-best-practices -g -y
npx skills add 101-skills/skills@ai-video-generation -g -y

# graphify has no SKILL.md in its repo and cannot be installed this way.
# Copy skills/graphify/ into ~/.agents/skills/ manually, then:
pip install graphifyy
```

Or copy `skills/*` straight into `~/.agents/skills/` — they are complete,
including the bundled data files that `save_skill` cannot store.

## Two things to read before writing any copy

`CLAUDE.md` §2 lists hard constraints that are legal, not stylistic — the biggest
being that **creatine health claims are illegal in Great Britain** since
27 Feb 2025, and that **Canada requires an NPN** the product does not have.

`CLAUDE.md` §2 also flags the open risk that outranks all the others: creatine
gummies failed independent testing at roughly a 46% rate in 2025, and this
product's dose claim sits at the edge of physical plausibility. Get the
certificate of analysis before spending anything else.

## Installing the theme

```bash
cd theme/athlesio-theme
zip -r ../athlesio-theme.zip .    # archive root must be layout/, sections/, ...
```

Shopify Admin → Online Store → Themes → Add theme → Upload zip file.
