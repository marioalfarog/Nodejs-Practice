import express from "express";
import Task from "../models/task.js";

const router = new express.Router()

//CREATE
router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);

  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
  // task
  //   .save()
  //   .then(() => {
  //     res.status(201).send(task);
  //   })
  //   .catch((error) => {
  //     res.status(400).send(error);
  //   });
});

//READING
//GET /tasks?completed=
//GET /tasks?limit=10&skip=20
//GET /tasks?sortBy=createdAt:desc
router.get("/tasks", async (req, res) => {
  let match = {};

  if (req.query.completed === "true") {
    match = { completed: true };
  }
  if (req.query.completed === "false") {
    match = { completed: false };
  }

  let options = {};

  if (req.query.limit) {
    options = { limit: req.query.limit };
  }
  if (req.query.skip) {
    options = { skip: req.query.skip };
  }
  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(":");
    options[parts[0]] = parts[1] === "desc" ? -1 : 1;
  }

  console.log(match);
  try {
    const tasks = await Task.find(match, null, options);
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }

  // Task.find({})
  //   .then((tasks) => {
  //     res.status(200).send(tasks);
  //   })
  //   .catch((error) => {
  //     res.status(500).send(error);
  //   });
});

router.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send("task not found");
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }

  // Task.findById(_id)
  //   .then((task) => {
  //     if (!task) {
  //       return res.status(404).send("task not found");
  //     }
  //     res.status(200).send(task);
  //   })
  //   .catch((error) => {
  //     res.status(500).send(error);
  //   });
});

//UPDATING
router.patch("/tasks/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdated = ["description", "completed"];

  const isValidOperation = updates.every((update) =>
    allowedUpdated.includes(update),
  );

  if (!isValidOperation) {
    return res.status(404).send("Invalid updates");
  }

  const _id = req.params.id;
  try {
    const task = await Task.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).send("task not found");
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

//DELETING
router.delete("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findByIdAndDelete(_id);
    if (!task) {
      return res.status(404).send("task not found");
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;