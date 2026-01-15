

import mongoose, { Schema, Document } from "mongoose";

export interface IMember extends Document {
  fullName: string;
  designation: string;
  email?: string;
  phone?: string;
  department?: string;
  joinDate?: string;
  bio?: string;
  photo?: string;
  status?: "Active" | "Inactive"; 
  visible?: boolean; 

}

const MemberSchema: Schema = new Schema(
  {
    fullName: { type: String, required: true },
    designation: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    department: { type: String },
    joinDate: { type: String },
    bio: { type: String },
    photo: { type: String }, 
    status: { type: String, enum: ["Active", "Inactive"], default: "Active" }, 
       
  },
  { timestamps: true }
);

export default mongoose.model<IMember>("Member", MemberSchema);
