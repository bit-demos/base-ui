# Base-ui components

Base components that are used to compose more complex components and can be used aross multiple scopes and applications

<img width="1124" alt="CleanShot 2021-08-10 at 23 26 40@2x" src="https://user-images.githubusercontent.com/13063165/128937364-5c814d60-7538-4e00-8571-31ad3020bae6.png">

Exported components can be seen [here](https://bit.dev/learn-bit-react/base-ui)

<img width="1790" alt="CleanShot 2021-08-10 at 23 17 28@2x" src="https://user-images.githubusercontent.com/13063165/128936353-9524b65f-e2a3-4e2b-9b35-6ed8cd06743b.png">

If you would like to import(clone) the project to take it for a test run make sure you have [bit installed](https://harmony-docs.bit.dev/getting-started/installing-bit).

```bash
npm i -g @teambit/bvm
bvm install
```

Create an empty workspace. (skip this step if you want to import the components into an already created workspace)

```bash
bit new react my-workspace --empty
```

Enter the current working directory

```bash
cd my-workspace
```

Open the Project in your editor and modify the variants section of your `workspace.jsonc` file. 

**Important** if you don't configure the variants first then the import will not work.

```json
"teambit.workspace/variants": {
    "{ui/**}": {
      "learn-bit-react.base-ui/env/learn-bit-react": {}
    },
    "{styles/**}, {themes/*}, , {figma/*}": {
      "teambit.react/react": {}
    },
    "{env/*}, {apps/*}": {
      "teambit.harmony/aspect": {}
    },
    "{component-generator}, {workspace-generator}": {
      "teambit.harmony/aspect": {}
    },
    "{entity/*}": {
      "teambit.harmony/node": {}
    },
    "{content/*}": {
      "teambit.mdx/mdx": {}
    }
  }
```

Use the `bit import` command to import all components into your workspace. This is similar to cloning a project.

```bash
bit import "learn-bit-react.base-ui/*"
```


Start the dev server

```bash
bit start
```

You should now see all the ecommerce components on [localhost:3000](http://localhost:3000)
