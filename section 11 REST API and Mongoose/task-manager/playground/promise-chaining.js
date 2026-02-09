import {} from "../src/db/mongoose.js";
import User from "../src/models/user.js";

// User.findByIdAndUpdate("6989be9c6a1d429cd1056a77", {
//   age: 33,
// })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 33 });
//   })
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age: age });
  return count;
};
updateAgeAndCount("6989be9c6a1d429cd1056a77", 33)
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });
