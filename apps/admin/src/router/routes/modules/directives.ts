// @unocss-include
import type { RouteRecordRaw } from "vue-router";
import { LAYOUT } from "~/router/constant";

const directive: RouteRecordRaw = {
  path: "/directive",
  name: "Directives",
  component: LAYOUT,
  redirect: "/directive/copy",
  meta: {
    title: "routes.directives.directives",
    icon: "i-mingcute-plugin-2-line",
  },
  children: [
    {
      path: "copy",
      name: "Copy",
      component: () => import("~/pages/directives/copy/index.vue"),
      meta: {
        title: "routes.directives.copy",
        icon: "i-material-symbols-content-copy-outline",
      },
    },
  ],
};

export default directive;
