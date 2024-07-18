const Todo=require("../models/Todo")


exports.getAllTodos= async (req,res)=>
{


    try{

        const response= await Todo.find({});

        res.status(200).json({
            success:true,
            data:response,
            message:"Fetch All Successfully"
        })
    }

    catch(err)
    {
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Error Agyi",
            message:err.message,
        })
    }

}


exports.getTodoById=async (req,res)=>
{
    try{
        const id=req.params.id;
        const response=await Todo.findById({_id:id})
        if(!response)
        {
            return res.status(404).json({
                success:false,
                message:"No data Found"
            })
        }

        res.status(200).json({
            success:true,
            data:response,
            message:"Data Find Successfully"
        })

    }

    catch(err)
    {
        console.log(err)
        res.status(500).json({
            success:false,
            data:"Nodata",
            message:"nothis is here",
        })
    }
}


