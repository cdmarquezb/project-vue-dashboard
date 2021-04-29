This is a Vue 3 application that will be displayed after the user login in our microfrotend app.

For react application we will need:

```
import App from "./components/App";
import { createApp } from "vue";

const mount = (el) => {
  const app = createApp(App);
  app.mount(el);
};


export { mount };
```

for development mode we call the mount funciton immediatly:
```
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}
```

This Project is running at http://localhost:8083 or  after `npm start`

