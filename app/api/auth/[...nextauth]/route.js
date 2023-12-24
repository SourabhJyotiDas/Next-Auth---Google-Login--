import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"


const authOptions = {
   // session: {
   //    strategy: "jwt"
   // },
   providers: [
      GoogleProvider({
         clientId: "915692287850-pcee4mbb0sfigrnb1mjikjnf0gik91ht.apps.googleusercontent.com",
         clientSecret: "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"
      })
   ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }
