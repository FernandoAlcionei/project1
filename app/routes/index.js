module.exports = (app) => {
    const { api } = app;

    app.post('/employee', api.employee.create);

    app.patch('/employee', api.employee.update);

    app.get('/employees', api.employee.getAll);

    app.get('/employee/:id', api.employee.getById);

    app.delete('/employee/:id', api.employee.deleteById);


    app.post('/shop', api.shop.create);

    app.get('/shops', api.shop.getAll);


    app.post('/employee-type', api.employeeType.create);

    app.get('/employee-types', api.employeeType.getAll);
}