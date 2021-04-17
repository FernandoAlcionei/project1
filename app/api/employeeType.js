module.exports = (app) => {
    const { dao } = app;
    const api = {};

    api.create = (req, res) => {
        const { employeeType } = req.body;
        
        dao.employeeType.create(employeeType).then(() => (
            res.sendStatus(201)
        )).catch(error => res.status(500).json(error));
    }

    api.getAll = (req, res) => {
        dao.employeeType.getAll().then((result) => (
            res.json({ employeeTypes: result.rows })
        )).catch(error => res.status(500).json(error));
    }

    return api;
}