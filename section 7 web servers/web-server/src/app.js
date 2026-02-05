import path from "path";
import { fileURLToPath } from "url";
import hbs from "hbs";

import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

const app = express();

// set up handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", { title: "Weather", name: "Mario Alfaro" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About", name: "Mario Alfaro" });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    helpText: "here is some help text",
    name: "Mario Alfaro",
  });
});

app.get("/weather", (req, res) => {
  res.send({ forecast: "", location: "" });
});

app.get("/help/{*splat}", (req, res) => {
  res.render("error404", {
    title: "404",
    error: "Help article not found",
    name: "Mario Alfaro",
  });
});

app.get("/{*splat}", (req, res) => {
  res.render("error404", {
    title: "404",
    error: "this is a 404 error",
    name: "Mario Alfaro",
  });
});

app.listen(3000, () => {
  console.log("server running in port 3000.");
});
