module.exports = (_config, { strapi }) => {
    const redirects = ['/'].map((path) => ({
        method: 'GET',
        path,
        handler: (ctx) => ctx.redirect('/index.html'),
        config: { auth: false },
    }));

    // const redirects = ['/', '/index.html'].map((path) => ({
    //     method: 'GET',
    //     path,
    //     handler: (ctx) => ctx.redirect('/admin'),
    //     config: { auth: false },
    // }));

    strapi.server.routes(redirects);
};