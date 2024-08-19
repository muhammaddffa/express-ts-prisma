"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_controller_1 = require("../controllers/book.controller");
const bookRouter = (0, express_1.Router)();
bookRouter.get("/", book_controller_1.getAllBooks);
bookRouter.get("/:id", book_controller_1.getBookById);
bookRouter.post("/", book_controller_1.createBook);
bookRouter.put("/:id", book_controller_1.updateBook);
bookRouter.delete("/:id", book_controller_1.deleteBook);
exports.default = bookRouter;
//# sourceMappingURL=book.router.js.map