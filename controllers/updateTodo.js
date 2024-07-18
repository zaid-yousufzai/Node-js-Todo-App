const Todo=require("../models/Todo")

exports.updateTodo=async (req,res)=>
{
    try{
        const {id}=req.params;
        const {title,description}=req.body;

        const response=await Todo.findByIdAndUpdate({_id:id},
            {title,description,updatedAt:Date.now()},
        )

        res.status(200).json({
            success:true,
            data:response,
            message:"Updated successfully"
        })

    }

    catch(err)
    {
        console.log(err);
        res.status(500).json({
            success:false,
            data:"No data is here",
            message:"Error in server",
        })
    }
}