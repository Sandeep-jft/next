import { getSession, signIn, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react';

const Dashboard = (props) => {
    const [loading,setLoading] = useState(true);
    const {data, status} = useSession();

    useEffect(()=>{
        const getUserSession = async ()=>{
            const session = await getSession();
            if(session){
                setLoading(false);
            }else{
                signIn();
            }
        }
        getUserSession()
    },[])
    
    if(loading){
        return <div>Loading</div>
    }

    return (
        <div>Dashboard Login success</div>
    )
}

export default Dashboard