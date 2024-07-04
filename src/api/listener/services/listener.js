'use strict';

/**
 * listener service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::listener.listener');
