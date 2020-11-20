import App from "./App.svelte";
import "./global.css";
import "@webcomponents/webcomponentsjs/webcomponents-loader.js";
import "@material/mwc-button";
import "@material/mwc-switch";
import "@material/mwc-formfield";
import "@material/mwc-linear-progress";
import "@material/mwc-tab-bar";
import "@material/mwc-tab";
import "@material/mwc-fab";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
