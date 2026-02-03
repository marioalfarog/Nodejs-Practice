import { add, name } from "./utils.js";
import notes from "./notes.js";
import fs from "fs";
import validator from "validator";
import chalk from "chalk";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// const command = process.argv[2];
// console.log(process.argv);

// customize Yargs version
const y = yargs(process.argv.slice(2));
y.version("1.1.0").showVersion();

// ADD, REMOVE, READ , LIST
const com = yargs(hideBin(process.argv));

//CREATE ADD COMMAND
com.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Content of the note",
      demandOption: true,
      type: "string",
    }
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body)
  },
});

//CREATE REMOVE COMMAND
com.command({
  command: "remove",
  describe: "remove a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title)
  },
});

//CREATE READ COMMAND
com.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    }
  },
  handler: (argv) => {
    notes.readNote(argv.title)
  },
});

//CREATE LIST COMMAND
com.command({
  command: "list",
  describe: "list notes",
  handler: () => {
    notes.listNotes();
  },
});

com.parse();