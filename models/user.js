import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
   {
      name: String,

      avatar: String,

      googleId: {
         type: String,
         required: true,
         unique: true,
      },

      role: {
         type: "String",
         enum: ["admin", "user"],
         default: "user",
      },

      createdAt: {
         type: Date,
         default: Date.now,
      },
   },
   { timestamps: true }
);

export default mongoose.models?.User || mongoose.model("User", UserSchema);
