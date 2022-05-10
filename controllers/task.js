const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.status(200).json(allTasks);
  } catch (err) {
    res.status(500).json(err);
  }
}

const createTasks = async (req, res) => {
  try{
    const createTask = await Task.create(req.body);
    res.status(200).json(createTask);
  } catch (err) {
    res.status(500).json(err);
  }
}

const getsingleTasks = async (req, res) => {
  try {
    const getSingleTask = await Task.findOne({ _id: req.params.id });

    if (!getSingleTask) {
      return res.status(404).json(`_id:${req.params.id}は存在しません`);
    }

    res.status(200).json(getSingleTask);
  } catch (err) {
    res.status(500).json(err);
  }
}

const updateTasks = async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const updateTask = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true, 
    }); 

    if (!updateTask) {
      return res.status(404).json(`_id:${req.params.id}は存在しません`);
    }

    res.status(200).json(updateTask);
  } catch (err) {
    res.status(500).json(err);
  }
}

const deleteTasks = async (req, res) => {
  try {
    const deleteTask = await Task.findOneAndDelete({ _id: req.params.id });

    if (!deleteTask) {
      return res.status(404).json(`_id:${req.params.id}は存在しません`);
    }

    res.status(200).json(deleteTask);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = { 
  getAllTasks,
  createTasks,
  getsingleTasks,
  updateTasks,
  deleteTasks
};