import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google";
import axios from "axios"
import { connectToDatabase } from "../../../../config/database";
import User from "../../../../models/user"
import { NextResponse } from "next/server";

const authOptions = {
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
   ],
   callbacks: {
      async signIn({ user, account }) {

         if (account.provider === "google") {

            const { name, email, image } = user;

            try {

               await connectToDatabase();

               let userExists = await User.findOne({ email });

               if (!userExists) {
                  await axios.post(`${process.env.FRONTENDURL}/api/googleauth`, { name, email, image })
                  return user;
               }

            } catch (error) {
               return NextResponse.json({ message: error.message }, { status: 500 })
            }
         }
         return user;
      }
   }

};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
