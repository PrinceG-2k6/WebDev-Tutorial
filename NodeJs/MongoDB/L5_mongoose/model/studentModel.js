import mongoose from "mongoose";
import studentSchema from "../schema/studentSchema.js";

const studentmodel = mongoose.model("students",studentSchema);
export default studentmodel;