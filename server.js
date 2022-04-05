const express = require("express");
const mongoose = require("mongoose");
const articeRouter = require("./routes/articles");
const app = express();

mongoose.connect("mongodb://localhost/note", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Articles",
      created: new Date(),
      description: "Test Description",
    },
    {
      title: "Test Articles 2",
      created: new Date(),
      description: "Test Description",
    },
  ];
  res.render("articles/index", { articles: articles });
});

app.use("/articles", articeRouter);
app.listen(process.env.PORT || 3000);
