const models = require('../../models');
const dao;

dao.create = (employee) => models.employee.create(employee);

module.exports = () => dao;