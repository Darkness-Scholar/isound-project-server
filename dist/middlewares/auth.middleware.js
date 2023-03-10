"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const jwt = require('jsonwebtoken');
const checkAuth = (req, res, next) => {
    let { access_token } = req.headers;
    if (!access_token)
        return res.status(400).json({ msg: 'No Token provide' });
    jwt.verify(access_token, process.env.SECRET_KEY, (err, log) => {
        if (err)
            return res.status(400).json({ msg: 'Unauthorized access' });
        req.user = log.user_id;
        next();
    });
};
exports.checkAuth = checkAuth;
