import fs from "fs";
import chalk from "chalk";

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    console.log(chalk.bgGreen.bold("New note added"));
    saveNotes(notes);
  } else {
    console.log(chalk.bgRed.bold("Note title taken"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const noteRemoved = notes.filter((note) => note.title != title);
  if (notes.length <= noteRemoved.length) {
    console.log(chalk.bgRed.bold("No note found!"));
  } else {
    console.log(chalk.bgGreen.bold("Note removed!"));
    saveNotes(noteRemoved);
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bgBlue.bold("Your notes:"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  console.log(notes)
  const note = notes.find((note) => note.title === title);
  if (!note) {
    console.log(chalk.bgRed.bold("Note not found!"));
  } else {
    console.log(chalk.inverse.bold(note.title), note.body);
  }

}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

export default { getNotes, addNote, removeNote, listNotes, readNote};
