# gas-devcontainer

Devcontainer for Google Apps Script.

## Usage

### Start Project

0. Reopen in Container.
1. Login to Google Account.
   - `clasp login`
2. Create GAS project.
   - `clasp create`
3. Build `src` to `dist`.
   - `yarn build`
4. Push code to GAS.
   - `clasp push`
5. Open GAS project and deploy.
   - `clasp open`
   - `Deploy > New deployment`
   - **Make sure to note the deployment ID.**

### Commands

| Command        | Description           |
| -------------- | --------------------- |
| `clasp login`  | Login to Google       |
| `clasp create` | Create GAS project    |
| `clasp push`   | Push `dist` to GAS    |
| `clasp open`   | Open GAS project      |
| `yarn build`   | Build `src` to `dist` |

## References

- SpreadsheetApp
  - https://developers.google.com/apps-script/reference/spreadsheet

## TDDO

- Credential is saved in `~/.clasprc.json`. I want to save it locally.
