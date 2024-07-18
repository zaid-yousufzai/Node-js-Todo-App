// import the model

const Todo = require("../models/Todo");

// define route handler

exports.createTodo = async (req, res) => {
  try {
    //extract title and description from the request body

    const { title, description } = req.body;

    // create anew object and insert into the db

    const response = await Todo.create({ title, description });

    //send a json response with success flag

    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Successful",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};

// module.exports={this.createTodo}
