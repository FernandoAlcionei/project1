const models = require('../../models');
const dao = {};

dao.create = (employee) => models.employee.create(employee, {
    include: [{
        model: models['shop_employee'],
        as: 'shops'
    }]
});

dao.update = (employee) => models.employee.update(employee, {
    where: { id: employee.id },
    include: [{
        model: models['shop_employee'],
        as: 'shops'
    }]
});

dao.getAll = () => models.employee.findAndCountAll();

dao.getById = (id) => models.employee.findOne({
    where: { id },
    include: [{
        model: models['employee_type'],
        as: 'employeeType'
    },{
        model: models['shop_employee'],
        as: 'shops'
    }]
});

dao.deleteById = (id) => models.employee.destroy({ where: { id }});

module.exports = () => dao;