import mongoose from "mongoose";


 const Connection= async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-ylznd3a-shard-00-00.xnaa4lh.mongodb.net:27017,ac-ylznd3a-shard-00-01.xnaa4lh.mongodb.net:27017,ac-ylznd3a-shard-00-02.xnaa4lh.mongodb.net:27017/?ssl=true&replicaSet=atlas-g0ut0z-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
            await mongoose.connect(URL,{useNewUrlParser:true})
            console.log("Database Connected Successfully");
    }catch(error){
            console.log("Error while connecting with the database ",error);
    }
}

export default Connection