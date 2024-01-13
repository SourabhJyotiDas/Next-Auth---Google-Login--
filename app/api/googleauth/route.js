

import { connectToDatabase } from "../../../config/database";
import User from "../../../models/user";
import { NextResponse } from "next/server";


export async function POST(request) {

  const { name, email, image } = await request.json();

  await connectToDatabase();

  await User.create({ name, email, avatar: image });

  return NextResponse.json({ message: "User Registered Successfully" }, { status: 201 });

}