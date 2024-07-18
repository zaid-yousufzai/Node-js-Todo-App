const Todo=require("../models/Todo")

exports.deleteTodo=async (req,res)=>
{
    try{

        const {id}=req.params;
        await Todo.deleteOne({_id:id})
        res.status(200).json({
            success:true,
            message:"Data Deleted Successfully",
        })

    }

    catch(err)
    {
        console.log(err)
        res.status(500).json({
            success:false,
            message:"Server Error"
        })
    }
}