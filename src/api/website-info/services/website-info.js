'use strict';

/**
 * website-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::website-info.website-info');
