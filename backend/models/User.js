import pkg from "mongoose";
import { uuid } from "uuidv4";
const { Schema, model } = pkg;
// Create Schema
const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
  user_type: {
    type: String,
    default: "user",
  },
  photoURL: {
    type: String,
    default: "",
  },
});

const User = model("user", UserSchema);

export default User;
