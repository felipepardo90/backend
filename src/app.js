const express = require("express");
const app = express();
const indexApiRest = require("./routes/indexApiRest");
const indexApi = require("./routes/indexApi");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");

// handlebars settings
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: path.join(__dirname, "./views/main.hbs"),
    layoutsDir: path.join(__dirname, "./views"),
    partialsDir: path.join(__dirname, "./views/partials"),
  })
);

// settings
app.set("port", process.env.PORT || 8080);
app.set("json spaces", 2);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // ejs
// app.set("view engine", "hbs"); // hbs

// middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/", indexApi);
app.use("/api/productos", indexApiRest);

// static
app.use(express.static(path.join(__dirname, "../public")));

// 404 handler
app.use((req, res, next) => {
  res.render("404");
});

module.exports = app;
