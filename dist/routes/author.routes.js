"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const author_controller_1 = require("../controllers/author.controller");
const authorRouter = (0, express_1.Router)();
authorRouter.get("/", author_controller_1.getAllAuthors);
authorRouter.get("/:id", author_controller_1.getAuthorById);
authorRouter.post("/", author_controller_1.createAuthor);
authorRouter.put("/:id", author_controller_1.updateAuthor);
authorRouter.delete("/:id", author_controller_1.deleteAuthor);
exports.default = authorRouter;
//# sourceMappingURL=author.routes.js.map