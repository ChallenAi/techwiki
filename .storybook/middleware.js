const proxy = require("http-proxy-middleware");

module.exports = function expressMiddleware(router) {
  router.use(
    "/oapi",
    proxy({
      target: "http://localhost:7002",
      changeOrigin: true,
    })
  );
  router.use(
    "/api",
    proxy({
      target: "http://localhost:7002",
      changeOrigin: true,
    })
  );
  router.use(
    "/images",
    proxy({
      target: "http://localhost:7002",
      changeOrigin: true,
    })
  );
};
