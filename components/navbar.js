import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar' >
        <div className='navbar-head' >
            <p className='navbar-head__heading' >Auth</p>
        </div>
        <div className='navbar-sidebar' >
            <ul className='navbar-sidebar__links' >
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
                <li className='navbar-sidebar__links__item' >
                    <Link href='/posts' >
                    <a>Posts</a>
                    </Link>
                </li>
                <li className='navbar-sidebar__links__item' >
                    <Link href='/signin' >
                    <a>Sign In</a>
                    </Link>
                </li>
                <li className='navbar-sidebar__links__item' >
                    <Link href='/signout' >
                    <a>Sign Out</a>
                    </Link>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar