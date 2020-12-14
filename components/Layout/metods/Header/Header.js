import React from 'react'
import Link from "next/link"
import {useRouter} from 'next/router'

export default function Header() {

    const router = useRouter()
    // console.log("router ", router);

    return (

      <>
      
      <header className="site-navbar site-navbar-target" role="banner">

        <div className="container">
          <div className="row align-items-center position-relative">

            <div className="col-lg-4">
              <nav className="site-navigation text-right ml-auto " role="navigation">
                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                  <li className={router.pathname === '/' ? 'active':''}>
                    <Link href="/">
                    <a className="nav-link">Home</a>
                    </Link>
                  </li>
                  <li className={router.pathname === '/project' ? 'active':''}>
                    <Link href="/project">
                    <a className="nav-link">Project</a>
                    </Link>
                  </li>
                  <li className={router.pathname === '/service' ? 'active':''}>
                    <Link href="/service"> 
                    <a className="nav-link">Services</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-4 text-center">
              <div className="site-logo">
                <Link href="/">
                  <a>Ideal</a>
                </Link>
              </div>

              <div className="ml-auto toggle-button d-inline-block d-lg-none"><a href="#" className="site-menu-toggle py-5 js-menu-toggle text-white"><span className="icon-menu h3 text-white"></span></a></div>
            </div>
            <div className="col-lg-4">
              <nav className="site-navigation text-left mr-auto " role="navigation">
                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                  <li className={router.pathname === '/about' ? 'active':''}>
                    <Link href="/about">
                      <a className="nav-link">About</a>
                    </Link>
                  </li>
                  <li className={router.pathname === '/blog' ? 'active':''}>
                    <Link href="/blog">
                      <a className="nav-link">Blog</a>
                    </Link>
                  </li>
                  <li className={router.pathname === '/contact' ? 'active':''}>
                    <Link href="/contact">
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

          </div>
        </div>

      </header>
      
      </>
    )
}
