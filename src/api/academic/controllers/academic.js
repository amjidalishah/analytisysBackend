'use strict';

/**
 * academic controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const createPopulatedController = require("/root/gis/src/helpers/populate");

module.exports = createCoreController('api::academic.academic');
