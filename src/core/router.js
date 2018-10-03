loadScripts([
  {
    url: "https://unpkg.com/@vaadin/router/dist/vaadin-router.umd.min.js",
    name: "router-vaadin"
  }
]).then(_ => {
  // select the DOM node where the router inserts route Web Components
  const routerView = document.getElementById("router-view");
  const router = new Vaadin.Router(routerView);

  router.setRoutes([
    { path: "/", component: "native-wrap" },
    { path: "/angularjs", component: "angularjs-wrap" },
    { path: "/react", component: "react-wrap" },
    { path: "/vue", component: "vue-wrap" },
    { path: "/elm", component: "elm-wrap" }
  ]);
});
