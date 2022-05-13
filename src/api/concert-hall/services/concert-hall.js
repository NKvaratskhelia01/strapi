'use strict';

/**
 * concert-hall service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::concert-hall.concert-hall');
