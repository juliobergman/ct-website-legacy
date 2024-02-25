const routes = [
  // Home
  {
    path: "/",
    component: () => import("layouts/indexLayout.vue"),
    children: [
      {
        path: "",
        name: "home-page",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: ":username",
        name: "business-page",
        component: () => import("pages/business/profilePage.vue"),
        meta: {
          // middlewares: [guest],
        },
      },
    ],
  },
  // Blog
  {
    path: "/blog",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "blog-page",
        component: () => import("pages/blog/indexPage.vue"),
        meta: {
          // middlewares: [guest],
        },
      },
      {
        path: "post/:slug",
        name: "post-page",
        component: () => import("pages/blog/postPage.vue"),
        meta: {
          // middlewares: [guest],
        },
      },
      {
        path: "author/:username",
        name: "post-author",
        component: () => import("pages/blog/authorPage.vue"),
        meta: {
          // middlewares: [guest],
        },
      },
      {
        path: "category/:category",
        name: "blog-category",
        component: () => import("pages/blog/categoryPage.vue"),
        meta: {
          // middlewares: [guest],
        },
      },
    ],
  },
  // Business
  {
    path: "/business",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "section/:category",
        name: "business-category",
        component: () => import("pages/business/indexPage.vue"),
        meta: {
          // middlewares: [guest],
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
