import VueCookies from "vue3-cookies";

let $cookies;

export default (app) => {
  app.use(VueCookies, {
    expireTimes: "7d",
    secure: true,
  });
  VueCookies.install(app);
  $cookies = app.config.globalProperties.$cookies;
};

export { $cookies };
