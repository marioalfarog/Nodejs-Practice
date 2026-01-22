import { add, name } from "./utils.js";
import getNotes from "./notes.js";
import fs from "fs";
import validator from "validator";
import chalk from "chalk";

console.log(name);
console.log(add(1, 2));
console.log(getNotes());

console.log("@gmail.com " + validator.isEmail("@gmail.com"));
console.log(
  "mario.alfaro@gmail.com " + validator.isEmail("mario.alfaro@gmail.com"),
);
console.log("https://mead.io " + validator.isURL("https://mead.io"));
console.log("https//mead.io " + validator.isURL("https//mead.io"));

console.log(chalk.bgGreen.bold("Success!"));
console.log(chalk.green.bold("Success!"));
console.log(chalk.green.inverse.bold("Success!"));
console.log(chalk.red.inverse.bold("Error!"));
console.log(chalk.blue.inverse.bold("Error!"));