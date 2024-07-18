const express=require('express');
const router=express.Router();

//import the controller

const {createTodo}=require("../controllers/createTodo");
const {getAllTodos,getTodoById}=require("../controllers/getAllTodos");
const {updateTodo}=require("../controllers/updateTodo");
const {deleteTodo}=require("../controllers/deleteTodo");

//define api route

router.post("/createTodo",createTodo)
router.get("/getTodo",getAllTodos)
router.get("/getTodo/:id",getTodoById)
router.put("/updateTodo/:id",updateTodo)
router.delete("/deleteTodo/:id",deleteTodo)

module.exports=router