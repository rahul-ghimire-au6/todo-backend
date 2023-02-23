const todoModel = require("../model/todoModel");
const handleError = require("../helper/errorHandler");

const fetchAllTodo = async (req, res) => {
  try {
    const fetchedData = await todoModel.find({}, { __v: 0 }).lean();
    return res.status(200).json({
      success: true,
      message: "data fetched successfully",
      data: fetchedData,
    });
  } catch (err) {
    return handleError(res, err, 400);
  }
};

const createTodo = async (req, res) => {
  try {
    const todoData = req.body;
    const saveTodo = await todoModel.create({
      title: todoData.title,
      description: todoData.description,
    });
    return res.status(201).json({
      success: true,
      message: "data saved successfully",
    });
  } catch (err) {
    return handleError(res, err, 400);
  }
};

const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const newData = req.body;
    const updatedData = await todoModel.updateOne(
      { _id: todoId },
      { title: newData.title, description: newData.description }
    );
    if (updatedData.modifiedCount === 1 && updatedData.acknowledged === true) {
      return res.status(200).json({
        success: true,
        message: "data updated successfully",
      });
    }
    throw { name: "updationError", message: "data updation failed!!!" };
  } catch (err) {
    return handleError(res, err, 400);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const deleteData = await todoModel.findOneAndDelete({ _id: todoId });
    if (deleteData === null) {
      throw { name: "deleteError", message: "please send a valid id" };
    }
    return res.status(200).json({
      success: true,
      message: "data deleted successfully",
    });
  } catch (err) {
    return handleError(res, err, 400);
  }
};

const toggleTaskStatus = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const updateData = await todoModel.findOneAndUpdate({ _id: todoId }, [
      { $set: { isCompleted: { $not: "$isCompleted" } } },
    ]);
    return res.status(200).json({
      success: true,
      message: "data updated successfully",
    });
  } catch (err) {
    return handleError(res, err, 400);
  }
};

const searchByKeyword = async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const regexExpression = new RegExp(`^${keyword}`);
    const searchedData = await todoModel
      .find({ title: { $regex: regexExpression, $options: "m" } })
      .lean();
    return res.status(200).json({
      success: true,
      message: "data fetched successfully",
      data: searchedData,
    });
  } catch (err) {
    return handleError(res, err, 400);
  }
};

module.exports = {
  fetchAllTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleTaskStatus,
  searchByKeyword,
};
