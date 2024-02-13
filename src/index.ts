import express from "express";
import authorRouter from "./routes/author.routes";
import bookRouter from "./routes/book.router";
// import 'dotenv';
// import bcrpyt from 'bcrypt';

const app = express();
// const cors = require('cors');
// const http = require('http');
const port = process.env.PORT || 7575; 

app.use(express.json());

// app.use(cors())

app.use("/authors", authorRouter); 
app.use("/books", bookRouter);

app.get("/ping", (req, res) => {
  res.status(200).json({ message: "Awesome it works 🐻" });
});

app.listen(port, () => {
  console.log(`Server up and on port: ${port}`);
});
