'use strict';

/**
 * listener router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::listener.listener');
