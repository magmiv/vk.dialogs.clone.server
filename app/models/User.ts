import mongoose from "mongoose";

// TODO image
const UserSchema = new mongoose.Schema({
   name: String,
   password: String,
   surname: String
});

export default mongoose.model("User", UserSchema, "users");
