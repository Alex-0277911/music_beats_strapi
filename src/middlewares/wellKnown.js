/**
 *  wellknown.ts
 *  place this file under src/middlewares/wellKnown.js
 */
const koaStatic = require("koa-static");

module.exports = (config, { strapi })=> {
  strapi.server.routes([
    {
      method: "GET",
      path: "/.well-known/(.*)",
      handler: koaStatic(strapi.dirs.static.public, {
        maxage: config.maxage,
        defer: true,
        hidden: true,
      }),
      config: { auth: false },
    },
  ]);
};
