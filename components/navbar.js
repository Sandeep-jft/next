import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

const Navbar = () => {
    const {data:session, status:loading} = useSession();


  return (
    <div className='navbar' >
        <div className='navbar-head' >
            <p className='navbar-head__heading' >Auth</p>
        </div>
        <div className='navbar-sidebar' >
            <ul className='navbar-sidebar__links' >
                <li className='navbar-sidebar__links__item' >
                    <Link href='/' >
                    <a>Home</a>
                    </Link>
                </li>
                <li className='navbar-sidebar__links__item' >
                    <Link href='/blog' >
                    <a>Blog</a>
                    </Link>
                </li>
                <li className='navbar-sidebar__links__item' >
                    <Link href='/dashboard'>
                    <a>Dashboard</a>
                    </Link>
                </li>
                {
                    loading === 'unauthenticated' && !session && 
                    <li className='navbar-sidebar__links__item' >
                    <Link href='/api/auth/signin' >
                    <a onClick={(e)=>{
                        e.preventDefault();
                        signIn();
                    }}>Sign In</a>
                    </Link>
                </li>
                }
                {
                    loading === 'authenticated' && session && 
                    <li className='navbar-sidebar__links__item' >
                    <Link href='/api/auth/signout' >
                    <a onClick={(e)=>{
                        e.preventDefault();
                        signOut('github',{
                            redirect:true
                        });
                    }}>Sign Out</a>
                    </Link>
                </li>
                }
            </ul>
        </div>

    </div>
  )
}

export default Navbar