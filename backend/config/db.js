import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://iamabbas514_db_user:fUnUQeDWwBaKIIX8@cluster0.3otw9or.mongodb.net/?appName=Cluster0");
  console.log("DB connected");
}