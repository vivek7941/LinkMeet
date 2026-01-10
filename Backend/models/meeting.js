import mongoose, { Schema } from "mongoose";


const meetingSchema = new Schema({
  userId: { type: String, required: true },          
  date: { type: String, required: true },           
  meetingCode: { type: String, required: true },   
  time: { type: String, required: true },         
  participants: { type: [String], required: true },
}, {
  timestamps: true, 
});


export const Meeting = mongoose.model("Meeting", meetingSchema);
