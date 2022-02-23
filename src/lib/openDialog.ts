import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";
export const openDialog = (options:any) => {
  const { title, content, closeOnClickOverlay, ok, cancel, bottomBtn } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    // @ts-ignore
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(Dialog,
        {
          visible: true,closeOnClickOverlay,
          "onUpdate:visible": (newVisible:Boolean) => {
            if (!newVisible) {
              close();
            }
          },
          title,
          bottomBtn,
          ok,
          cancel,
        },
        { content:() => content }
      );
    },
  });
  app.mount(div);
};