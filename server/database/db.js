import mongoose from "mongoose";

const DbConnection = async ()=>{
    const MONGODB_URI = `mongodb+srv://amanbvs:amanbvs@filesharing.ytepy2k.mongodb.net/?retryWrites=true&w=majority`;
    try {
      await  mongoose.connect(MONGODB_URI,{ useNewUrlParser: true});
        console.log("Database connect successfully");
    } catch(error) {
        console.log(`Error while connecting with the database`,error.message);
    }
}

export default DbConnection;