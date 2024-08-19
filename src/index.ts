import express from "express";
import authorRouter from "./routes/author.routes";
import bookRouter from "./routes/book.router";
import cors from 'cors';

const app = express();
const port = process.env.PORT || 6666; 


app.use(cors());

app.use(express.json());

app.use("/authors", authorRouter); 
app.use("/books", bookRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Awesome it works 🐻" });
});

app.listen(port, () => {
  console.log(`Server up and on port: ${port}`);
});

export default app;
