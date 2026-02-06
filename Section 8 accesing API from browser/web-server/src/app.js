import path from "path";
import { fileURLToPath } from "url";
import hbs from "hbs";
import { geocode } from "./utils/geocode.js";
import { forecast } from "./utils/forecast.js";

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
  if (!req.query.address) {
    return res.send({ error: "you must provide an address" });
  }
  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      } else {
        forecast(latitude, longitude, (error, data) => {
          if (error) {
            return res.send({ error });
          } else {
            res.send({
              forecast: data,
              location,
              address: req.query.address,
            });
          }
        });
      }
    },
  );
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({ error: "you must provide a search term" });
  }

  console.log(req.query.search);
  res.send({ forecast: [] });
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
