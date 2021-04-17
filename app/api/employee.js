module.exports = (app) => {
    const { dao } = app;
    const api = {};

    api.create = (req, res) => {
        const { employee } = req.body;

        dao.employee.create(employee).then(() => (
            res.sendStatus(201)
        )).catch(error => res.status(500).json(error));
    }

    api.update = (req, res) => {
        const { employee } = req.body;

        dao.employee.update(employee).then(() => (
            res.sendStatus(200)
        )).catch(error => res.status(500).json(error));
    }

    api.getAll = (req, res) => {
        dao.employee.getAll().then((result) => (
            res.json({ employees: result.rows })
        )).catch(error => res.status(500).json(error));
    }

    api.getById = (req, res) => {
        const { id } = req.params;

        dao.employee.getById(id).then((employee) => (
            res.json({ employee })
        )).catch(error => res.status(500).json(error));
    }

    api.deleteById = (req, res) => {
        const { id } = req.params;

        dao.employee.deleteById(id).then(() => (
            res.sendStatus(200)
        )).catch(error => res.status(500).json(error));
    }

    return api;
}