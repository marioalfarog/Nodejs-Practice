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
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
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