const models = require('../../models');
const dao = {};

dao.create = (employee) => models['employee_type'].create(employee);

dao.getAll = () => models['employee_type'].findAndCountAll();

module.exports = () => dao;