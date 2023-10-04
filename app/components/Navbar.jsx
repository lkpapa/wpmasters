'use client';
import React, { useState } from 'react'
import Link from "next/link";
import NavItem from './NavItem';
import Image from 'next/image';
const MENU_LIST = [
  { text: "Portfolio", href: "/" },
  { text: "Diensten", href: "/about" },
  { text: "Werken bij", href: "/" },
  { text: "Over ons", href: "/" },
  { text: "Contact", href: "/" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Link href={"/"}>
              <img src="https://wpmasters20.kinsta.cloud/wp-content/uploads/2023/08/wpm-logo-outline.svg" className="custom-logo" alt="WP Masters" decoding="async" />
            </Link>
          </div>
          <div className='col-md-6'>
            <nav className={`${navActive ? "active" : ""} navbar`}>
              <ul id="menu-main-menu" className='navbar-nav'>
                {MENU_LIST.map((menu, idx) => (
                  <li
                    onClick={() => {
                      setActiveIdx(idx);
                      setNavActive(false);
                    }}
                    key={menu.text}
                  >
                    <NavItem active={activeIdx === idx} {...menu} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className='col-md-3 col-cta'>
          <a className="button-alt" href="#">Start een project</a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
