import express from "express";
import User from "../models/user.js";

const router = new express.Router()

//CREATE
router.get("/tests", async (req, res) => {
  res.status(201).send('todo bien');
})

router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }

  // user
  //   .save()
  //   .then(() => {
  //     res.status(201).send(user);
  //   })
  //   .catch((error) => {
  //     res.status(400).send(error);
  //   });
});

//READING
router.get("/users", async (req, res) => {
  try {
    console.log('trying')
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    console.log('trying2')
    res.status(500).send(error);
    console.log('trying4')
  }
  console.log('trying3')

  // User.find({})
  //   .then((users) => {
  //     res.status(200).send(users);
  //   })
  //   .catch((error) => {
  //     res.status(500).send(error);
  //   });
});

router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send("user not found");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }

  // const _id = req.params.id;
  // User.findById(_id)
  //   .then((user) => {
  //     if (!user) {
  //       return res.status(404).send("user not found");
  //     }
  //     res.status(200).send(user);
  //   })
  //   .catch((error) => {
  //     res.status(500).send(error);
  //   });
});

//UPDATING
router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdated = ["name", "email", "password", "age"];

  const isValidOperation = updates.every((update) =>
    allowedUpdated.includes(update),
  );

  if (!isValidOperation) {
    return res.status(404).send("Invalid updates");
  }

  const _id = req.params.id;
  try {
    const user = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send("user not found");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

//DELETING
router.delete("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(_id);
    if (!user) {
      return res.status(404).send("user not found");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;