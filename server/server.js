const connect = require("./db/connect");
const Task = require("./models/Models");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());

app.get("/api/v1/portfoilio", async (req, res) => {
  try {
    const tasks = await Task.find({});
    if (!tasks) {
      return res.status(404).json({ message: "file not found" });
    }
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(404).send(error);
  }
});

app.get(`/api/v1/portfoilio/:id`, async (req, res) => {
  try {
    const { id: task_id } = req.params;
    const tasks = await Task.findOne({ _id: task_id });
    if (!tasks) {
      return res.status(404).json({ message: "file not found" });
    }
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(404).send(error);
  }
});
app.patch(`/api/v1/portfoilio/:id`, async (req, res) => {
  try {
    const { id: task_id } = req.params;
    const tasks = await Task.findOneAndUpdate({ _id: task_id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!tasks) {
      return res.status(404).json({ message: "file not found" });
    }
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(404).send(error);
  }
});
app.delete(`/api/v1/portfoilio/:id`, async (req, res) => {
  try {
    const { id: task_id } = req.params;
    const tasks = await Task.findOneAndDelete({ _id: task_id });
    if (!tasks) {
      return res.status(404).json({ message: "file not found" });
    }
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(404).send(error);
  }
});

app.post("/api/v1/portfoilio", async (req, res) => {
  try {
    const tasks = await Task.create(req.body);
    if (!tasks) {
      return res.status(404).json({ message: "file not found" });
    }
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).send(error);
  }
});
const start = async () => {
  try {
    await connect(process.env.MONGO_URI);

    let port = 5000;

    app.listen(port, console.log(process.env.MONGO_URI));
  } catch (error) {
    console.log(error);
  }
};

start();
