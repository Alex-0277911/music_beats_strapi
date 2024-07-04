'use strict';

/**
 * listener controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::listener.listener');
