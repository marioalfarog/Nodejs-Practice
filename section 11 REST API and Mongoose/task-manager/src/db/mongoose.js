import mongoose from "mongoose";
const url = "mongodb://localhost:27017/";
const dbName = "task-manager-api";

mongoose.connect(url + dbName);
console.log('connected to db')


// const me = new User({
//   name: "Didi    ",
//   email: "Didi.wos@gmail.com       ",
//   password: '1234ddidi'
// });
// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

// const task1 = new Task({ description: "this is a new task2" });
// const result = await task1.save()
// if(!result) {
//     console.log("Error!");
// }
// else {
//     console.log(task1);
// }