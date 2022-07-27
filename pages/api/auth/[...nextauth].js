import NextAuth from "next-auth/next";
import GitHub from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "lib/mongodb";


const Auth = NextAuth({
    providers:[
        GitHub({
            clientId:process.env.GIT_CLIENT_ID,
            clientSecret:process.env.GIT_CLIENT_SECRET
        })
    ],
    session:{
        strategy:'jwt'
    },
    adapter:MongoDBAdapter(clientPromise),
    secret:"b1Yx0AnwN3+KmVR3Xc7US9cB9CGpr3AE8ZTtdIORJG4=",
    jwt:{
        maxAge:30*24*30*60
    },
    callbacks:{
        async session({ session, user, token }) {
            if(token){
                session.user.id = token.id
            }

            return session
          },
          async jwt(props) {
            const {token,user} = props;
            if(user){
                token.id = user.id;
            }
            return token
          }
    }
})


export default Auth;