
import mongoose from "mongoose";


export const connectToDatabase = async () => {
   try {
      await mongoose.connect("mongodb://localhost:27017/NextAuth");
      console.log("Mongoose Connected Successfully");
   } catch (error) {
      console.log(error.message);
   }
};


export const checkAuth = async (req) => {
   const cookie = req.headers.cookie;
   if (!cookie) return null;
 
   const token = cookie.split("=")[1];
 
   const decoded = jwt.verify(token, process.env.JWT_SECRET);
 
   return await User.findById(decoded._id);
 };