import express from "express";
import {} from "./db/mongoose.js";
import userRouter from "./routers/users.js";
import taskRouter from "./routers/tasks.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("server running in port 3000.");
});
