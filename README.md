# Base-ui components

Base components that are used to compose more complex components and can be used aross multiple scopes and applications. Below you can see how the Base UI components are used in the ecommerce scope and also to create the stores applications.

<img width="1124" alt="CleanShot 2021-08-10 at 23 26 40@2x" src="https://user-images.githubusercontent.com/13063165/128937364-5c814d60-7538-4e00-8571-31ad3020bae6.png">

A set of base ui components built with Bit including basic react ui components, style components, font components, a custom env, a custom component generator, a custom workspace generator and more. Exported components can be explored on [Bit.dev](https://bit.dev/learn-bit-react/base-ui).

<img width="1790" alt="CleanShot 2021-08-10 at 23 17 28@2x" src="https://user-images.githubusercontent.com/13063165/128936353-9524b65f-e2a3-4e2b-9b35-6ed8cd06743b.png">

## ☁️  Import(Clone) the Base UI Components

This is a demo project which you can clone using git or import all components into an already existing workspace.

### ⬇️ Install Bit

If you don't already have Bit installed on your computer you can do so using [BVM, Bit's version manager](https://harmony-docs.bit.dev/getting-started/installing-bit). This is the recommended way of installing Bit.

```bash
npm i -g @teambit/bvm
bvm install
```

### 🏠 Create a Workspace
A [Workspace](https://harmony-docs.bit.dev/building-with-bit/manage-workspace) is where you will compose and manage your components. Creating a Workspace can be done with a single command. A workspace can be created in an empty directory or in an existing project.

Create an empty workspace. (skip this step if you want to import the components into an already created workspace)

```bash
bit new react my-workspace --empty
```

Enter the current working directory

```bash
cd my-workspace
```
### ⌨️ Workspace Configuration

Open the Project in your editor to modify the `workspace.jsonc` file. 

### 🖼️ Variants (Component Environments)

This will apply the correct environments for each of the components we want to import.

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
### 🧒 Add the Dependencies

Add the dependeinces needed for your components to work. This step is only necessary if you want to later resue the components to make them your own.

```jsonc
 "dependencies": {
    "@teambit/ui.react-router.link": "0.0.368",
    "@testing-library/jest-dom": "5.12.0",
    "@testing-library/react": "11.2.6",
    "@testing-library/react-hooks": "5.1.1",
    "classnames": "2.3.1",
    "react-router": "5.2.0",
    "react-router-dom": "5.2.0"   
  },
 ```

### 🧞 Custom Component Generator

Register the Generator Aspect if you want to use the custom templates to generate more components. This goes at root level of the `workspace.jsonc` file. Once we have imported the components from the base-ui scope you will be able to run `bit templates` to see all available templates including the custom ones.

```jsonc
 /**
   * Generator Aspects to generate custom components.
   **/
  "teambit.generator/generator": {
    "aspects": ["learn-bit-react.base-ui/component-generator"]
  },
  "learn-bit-react.base-ui/component-generator": {},
 ```

### 🧱 Import the Components

Use the `bit import` command to import all components into your workspace. This is similar to cloning a project.

```bash
bit import "learn-bit-react.base-ui/*"
```

### 💻 Start the Local Dev Server

Start the dev server

```bash
bit start
```

You should now see all the ecommerce components on [localhost:3000](http://localhost:3000)

---

## 👩‍💻 Make the Components your own

If you want to remove the component scope and versioning so you can make these components your own and publish them to your remote scope then you can reset them using the following command.

```bash
bit init --reset-new
```

### ☁️ Configure the Remote Scope

Once you have set up a remote scope either self hosted or on [bit.dev](https://bit.dev) you can then tag and export all components

Modify the `workspace.jsonc` file and add the correct defaultScope. Replace `username` with your own username or organization name and setup a new scope called `base-ui` or whatever you prefer to call it:

```bash
"defaultScope": "username.base-ui"
```
### ⌨️ Modify the Import Statements

In your code editor do a find and replace for `@learn-bit-react/base-ui` with your new defaultScope, be careful of difference between dot and slash and make sure to add the '@' sign - `@username/base-ui`

### 🔗 Link all Components

Run the `bit link` command to make sure all components are correclty linked in the 'node_modules' folder.

```bash
bit link --rewire
```
### 🔍 Check the Status of all Components

Check the status of all components

```bash
bit status
```
### 🏗️ Compile all Components

If there are any missing dist folders then run `bit compile` to compile your components

```bash
bit compile
```
## 🆚 Version all Components

Components are now ready to be tagged. This will run all tests for your components and build them creating a new version.

```bash
bit tag --all --message "my new base-ui components"
````

## ⬆️ Export all Components
Once tagging is complete you can export your components

```bash
bit export
```

😃 You will now see all your components hosted on your remote scope.
