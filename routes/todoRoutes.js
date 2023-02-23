const Router = require("express");
const router = Router();
const {
  fetchAllTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleTaskStatus,
  searchByKeyword,
} = require("./../controller/todoController");

router.get("/fetchAllTodo", fetchAllTodo);

router.post("/createTodo", createTodo);

router.put("/updateTodo/:todoId", updateTodo);

router.delete("/deleteTodo/:todoId", deleteTodo);

router.patch("/toggleTaskStatus/:todoId", toggleTaskStatus);

router.get("/searchByKeyword", searchByKeyword);

module.exports = router;
