const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({ error: 'Token not provided!' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = jwt.verify(token, authConfig.secret);
        req.userId = decoded.id;
        return next();
    } catch (err) {
        return res.status(401).send({ error: 'Token invalid!' });
    }
}