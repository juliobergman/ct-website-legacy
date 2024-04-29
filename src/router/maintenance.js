const routes = [
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/misc/offlinePage.vue"),
  },
];

export default routes;
