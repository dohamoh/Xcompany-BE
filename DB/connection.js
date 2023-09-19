import mongoose from "mongoose";

const connection = async ()=>{
  mongoose.set('strictQuery', true);
    return await mongoose.connect("mongodb+srv://dohmohammed:doha2001@cluster0.io5stmr.mongodb.net/Xcompany")
    .then(()=> console.log(`connected on ...... `))
    .catch(err=>console.log(`fail to connect `))
}

export default connection;
