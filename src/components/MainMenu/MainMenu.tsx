import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';  // Import useRouter

type Props = {}

const MainMenu = (props: Props) => {
  const router = useRouter();  // Get the current route

  // Helper function to check if the link is active
  const isActive = (path: string) => router.pathname === path ? 'active' : '';

  return (
    <div className="main_menu">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand logo_h" href="/">
            <Image src="/images/custom-logo.png" alt="" width={165} height={80} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <div
            className="collapse navbar-collapse offset"
            id="navbarSupportedContent"
          >
            <ul className="nav navbar-nav menu_nav ml-auto">
              <li className={`nav-item ${isActive('/')}`}>
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${isActive('/about-us')}`}>
                <Link className="nav-link" href="/about-us">
                  About
                </Link>
              </li>
              <li className={`nav-item ${isActive('/services')}`}>
                <Link className="nav-link" href="/services">
                  Services
                </Link>
              </li>
              <li className={`nav-item ${isActive('/projects')}`}>
                <Link className="nav-link" href="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item submenu dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul className="dropdown-menu">
                  <li className={`nav-item ${isActive('/blog')}`}>
                    <Link className="nav-link" href="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className={`nav-item ${isActive('/single-blog')}`}>
                    <Link className="nav-link" href="/single-blog">
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`nav-item ${isActive('/contact')}`}>
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainMenu;
