import pkg from "mongoose";
import { uuid } from "uuidv4";
const { Schema, model } = pkg;
// Create Schema
const ResultSchema = new Schema({
  id: {
    type: String,
    default: uuid(),
  },
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  seen: {
    type: Boolean,
    default: false,
  },
});

const Result = model("Result", ResultSchema);

export default Result;
