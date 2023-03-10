"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const user = (0, express_1.Router)();
// user.use(checkAuth)
user.post("/signin", user_controller_1.default.signin);
user.post("/signup", user_controller_1.default.signup);
user.get("/profile", auth_middleware_1.checkAuth, user_controller_1.default.profile);
exports.default = user;
