import React from "react";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <div className='max-w-header flex justify-between px-20 py-8 mx-auto border border-red-400'>
      <div className=''>
        <Link href='/'>Y</Link>
      </div>
      <div className=''>
        <ul className='flex gap-6'>
          <li>
            <Link href='#About'>/ About</Link>
          </li>
          <li>
            <Link href='#Projects'>/ Projects</Link>
          </li>
          <li>
            <Link href='#Contact'>/ Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
