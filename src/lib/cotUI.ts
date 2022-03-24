import Dialog from "./Dialog.vue";
import Button from "./Button.vue";
import Switch from "./Switch.vue";
import Tabs from "./Tabs.vue";
import Tab from "./Tab.vue";
import { ComponentOptions } from "vue";

export default {
  install: (app: ComponentOptions) => {
    // Plugin code goes here
    app.component("Switch", Switch);
    app.component("Button", Button);
    app.component("Dialog", Dialog);
    app.component("Tab", Tab);
    app.component("Tabs", Tabs);
  },
};