import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema({
  ip: String,
  city: String,
  region: String,
  country: String,
  device: String,
  org: String,
  time: { type: Date, default: Date.now },
});

export default mongoose.models.Visitor || mongoose.model("Visitor", VisitorSchema);
