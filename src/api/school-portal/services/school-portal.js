'use strict';

/**
 * school-portal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::school-portal.school-portal');
