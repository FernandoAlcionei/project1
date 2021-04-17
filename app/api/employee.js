module.exports = (app) => {
    const { dao } = app;
    const api = {};

    api.create = (req, res) => {
        const { employee } = req.body;
        
        dao.employee.create(employee).then(() => (
            res.sendStatus(201)
        )).catch(error => res.status(500).json(error));
    }

    return api;
}