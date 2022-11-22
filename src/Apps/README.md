# Apps

Welcome to the most fun part of this project. The Apps!!

Here we have every application that runs in the iPhone. 

## How to create a new app

### Step 1
Decide on the app id, this needs to be unique and should follow the general syntax of "**.company.project", next create a folder with the name of the app id.

### Step 2
Create the app.json file, this stores general information about the app, for now this only stores the name and id. But in the future will store things like permissions and more.
```json
{
  "id": "**.company.project",
  "name": "Project"
}
```

### Step 3
Add in the app icon, the best option is an svg for scaling but any format (supported by vite) is completely fine. The convention is just ./icon.*, but if you want to put it in an /assets folder go ahead.

### Step 4
Create the entrypoint for your app, the only rule here is you have to export default the root component. You can put this in a /src folder at eg /src/app.tsx or /src/index.tsx. This root component will need to return JSX.
```jsx
const App = () => {
  return <h2>Hello World</h2>
};

export default App;
```

### Step 5
Create an index.ts file, this needs to export out the files we have created. It needs to use the `loadable` function wrapping the base component so the iPhone can lazy load it.
```typescript
import loadable from "@loadable/component";

export { default as icon } from "./icon.svg";
export { default as info } from "./app.json";
export const app = loadable(() => import("./app"));
```
So the core aspects here, is (using named exports), export icon, info and app.

### Step 6
Register the app, in the Apps/index.ts you need to add the app for ios to know of its existence. This involves first importing it, then adding it to the apps object
```typescript
import * as Project from "./**.company.project";
```
```typescript
const apps = {
  "**.company.project": Project,
}
```

### Step 7
Add the app to your home screen. Run the dev server and open the website. Next go to the App Store and the app should be there (in the future if we add a search you might have to search for it). Click on install and the app should add itself to the home screen and install. Next open the app and get to work.