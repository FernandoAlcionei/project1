const util = {}

util.error = (error, res) => {
    const data = {};

    console.error(error);

    if (error.errors) {
        for (const err of error.errors) {
           data[err.path] = err.validatorKey;
        }
    }

    return res.status(500).send({ error: data });
}

module.exports = () => util;