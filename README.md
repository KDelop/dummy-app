## Monorepo structure

### Tooling

Typescript + yarn workspaces

## Development

- Install `nvm`
- Run `nvm install` in the root to use the current default node version.
- Run `yarn` in the root directory to download all dependencies of all workspaces
- Setup environment variables on app basis by creating the `.env.local` file in the app directory.
- To start an app, e.g. "admin" either run:
  - From root directory, run: `yarn workspace admin start`
  - Or `cd apps/admin && yarn start` from there
