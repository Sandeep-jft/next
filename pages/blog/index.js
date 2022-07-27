import { getSession } from 'next-auth/react';
import React from 'react'

const Blog = ({data}) => {
  return (
    <div>Blog : {data}</div>
  )
}

export default Blog;

export const getServerSideProps = async (context)=>{
    const session = await getSession(context);

    if(!session){
        return {
            redirect:{
                destination:'/api/auth/signin?callbackUrl=http://localhost:3000/blog',
                permanent:false
            }
        }
    }

    return {
        props:{
            session,
            data : session ? "List of 100 personalized blogs" : "List of public blogs"
        }
    }
}