module.exports = (app) => {
    const { dao } = app;
    const api = {};

    api.create = (req, res) => {
        const { shop } = req.body;
        
        dao.shop.create(shop).then(() => (
            res.sendStatus(201)
        )).catch(error => res.status(500).json(error));
    }

    api.getAll = (req, res) => {
        dao.shop.getAll().then((result) => (
            res.json({ shops: result.rows })
        )).catch(error => res.status(500).json(error));
    }

    return api;
}