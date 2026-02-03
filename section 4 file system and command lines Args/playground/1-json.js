import fs from "fs";

const book = {
  title: "Ego is the enaemy",
  author: "Ryan holiday",
};

const bookJSON = JSON.stringify(book);
// console.log(bookJSON)

// const bookPARSED = JSON.parse(bookJSON);
// console.log(bookPARSED.author)

//fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync("1-json.json");
const data = JSON.parse(dataBuffer.toString());
console.log(data.author);

data.name = 'Mario';
data.age = 33;

const newData = JSON.stringify(data)
console.log(newData)

//fs.writeFileSync('1-json.json', newData);
