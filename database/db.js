import mongoose from "mongoose";

export const Connection = async(URL) => {
 
  
  try {
  await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true});
   console.log('Database Coonected Successfully');
  } catch (error) {
    console.log("Error while connecting with the data base", error.message);
  }
};

export default Connection;
