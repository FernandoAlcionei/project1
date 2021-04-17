module.exports = (app) => {
    const { api } = app;

    app.post('/employee', api.employee.create);
}