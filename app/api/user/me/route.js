


import { NextResponse } from "next/server";
import User from "../../../../models/user";
import { connectToDatabase } from "../../../../config/database";

export async function POST(request) {

   try {
      const { email } = await request.json();

      if (!email) {
         return NextResponse.json({ message: "Enter Your Email" }, { status: 500 });
      }

      await connectToDatabase();

      const user = await User.findOne({ email });

      return NextResponse.json({ success: true, user }, { status: 200 });
   } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
   }

}