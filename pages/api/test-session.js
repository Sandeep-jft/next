const { getSession } = require("next-auth/react")

const handler = async (req,res)=>{
    const session =  await getSession({req});
    if(!session){
        return res.status(401).json({error:"Unauthorized user"});
    }
    return res.status(200).json({message:"Success",session})
}

export default handler;