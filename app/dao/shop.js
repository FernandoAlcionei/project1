const models = require('../../models');
const dao = {};

dao.create = (shop) => models.shop.create(shop);

dao.getAll = () => models.shop.findAndCountAll();

module.exports = () => dao;
