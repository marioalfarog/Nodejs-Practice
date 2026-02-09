import {} from "../src/db/mongoose.js";
import Task from "../src/models/task.js";

// Task.findByIdAndDelete("6989d1bce398c91f224d5a00")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((task) => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};
deleteTaskAndCount("6989c18fc95e060b4ac95a09")
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });
