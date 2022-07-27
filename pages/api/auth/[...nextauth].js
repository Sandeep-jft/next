import NextAuth from "next-auth/next";
import Providers from "next-auth/providers";

const Auth = NextAuth({
    providers:[
        Providers.github({
            clientId:'',
            clientSecret:''
        })
    ]
})

const

export default Auth;