module.exports = (app) => {
    const { dao, util } = app;
    const api = {};

    api.create = (req, res) => {
        const { employeeType } = req.body;
        
        dao.employeeType.create(employeeType).then(() => (
            res.sendStatus(201)
        )).catch(error => util.handleError.error(error, res));
    }

    api.getAll = (req, res) => {
        dao.employeeType.getAll().then((result) => (
            res.json({ employeeTypes: result.rows })
        )).catch(error => util.handleError.error(error, res));
    }

    return api;
}