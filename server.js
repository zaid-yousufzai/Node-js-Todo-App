const express=require('express');
const app=express();

//load config from env file
require('dotenv').config();
const PORT=process.env.PORT || 4000;

//middleware to parse json request body

app.use(express.json());

//import routes for TOdo api

const todoRoutes=require("./routes/todos");

//mount the todo API routes

app.use("/api/v1",todoRoutes);

//start the server

app.listen(PORT,()=>
{
  console.log(`Server started successfully at ${PORT}`)
})


//connect the database

const dbConnect=require("./config/database")
dbConnect();


//define the default route

app.get("/",(req,res)=>
{
  res.send(`<h1>This is my Home Page</h1>`)
})