# GitHub Repository Search

The task is to create a simple tool for searching Kraftvaerk's repositories on GitHub by name.

- Design

  - Figma: https://www.figma.com/file/WjOF85xI6b2j74l9QGtqkE/Test-assignment?node-id=13%3A2 (you need to login in order to inspect layers and extract assets)
  - Font: https://fonts.google.com/specimen/Roboto (can be included directly from Google Fonts)

- API

  - Documentation: https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#list-organization-repositories
  - Example: https://api.github.com/orgs/kraftvaerk/repos

- Implementation details

  - Drop-down with results should appear whenever more than 2 characters were entered and there are matches (feel free to add appearance animation of your choice).
  - Spinner should appear while data is being fetched.
  - Search results should be sorted alphabetically in an ascending order (A to Z).
  - Search results should disappear when clicked outside.
  - Search query should be removed when clicked on ✕.
  - Browsers: latest WebKit-based browsers, latest Mozilla Firefox.

- Implementation recommendations
  - The data can be fetched once.
  - The search filtering can be implemented on the client.

Although we don't insist on use of any particular technology or approach, it's recommended to demonstrate how you'd do it on a real project.

Finally, please upload your code on GitHub and send us the link.

### Install dependencies:

To get started, install all the necessary dependencies.

```
cd ./<path_to_project>
yarn
```

### Runs the app in the development mode:

Run an dev server and start watching dev changes.

```
yarn start
```

### Bundle overview:

Run the following command after any webpack build:

```
yarn stats
```

### Production environment:

Build and preview production environment.

```
yarn build && yarn preview
```
