# Base-ui components that can be used across multiple apps

Exported components can be seen [here](https://bit.dev/learn-bit-react/base-ui)

If you would like to import(clone) the project to take it for a test run make sure you have [bit installed](https://harmony-docs.bit.dev/getting-started/installing-bit).

```bash
npm i -g @teambit/bvm
bvm install
```

Create an empty workspace

```bash
bit init
```

Use the `bit import` command to import all components into your workspace. This is similar to cloning a project.

```bash
bit import "learn-bit-react.shoe-store/*"
```

Copy the `workspace.jsonc` file from this repository and replace the one in your workspace. This will ensure you have the correct dependencies and environments set.

Start the dev server

```bash
bit start
```

You should now see all the ecommerce components on [localhost:3000](http://localhost:3000)