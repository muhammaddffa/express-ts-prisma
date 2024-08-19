"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const author_routes_1 = __importDefault(require("./routes/author.routes"));
const book_router_1 = __importDefault(require("./routes/book.router"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 6666;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/authors", author_routes_1.default);
app.use("/books", book_router_1.default);
app.get("/ping", (req, res) => {
    res.status(200).json({ message: "Awesome it works 🐻" });
});
app.listen(port, () => {
    console.log(`Server up and on port: ${port}`);
});
// export default app;
//# sourceMappingURL=index.js.map