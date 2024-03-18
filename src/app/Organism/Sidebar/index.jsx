"use client"
import React from 'react';
import './Sidebar.scss';
import Image from "next/image";
import Avatar from '@/app/Atoms/Avatar';
import { LuMessageSquare, LuLogOut } from "react-icons/lu";
import { usePathname, useRouter } from 'next/navigation'; // Import for using router object



const Sidebar = ({ items }) => {
  const navigate = usePathname();
  const route = useRouter()

  const handleSelect = (path) => {
    route.push(path)
  };
  const isLoggedIn =  localStorage && localStorage.getItem('formData');
  if (!isLoggedIn) return null;



  return (
    <nav className="sidebar">
      <ul className='menu-top'>
        <li>
          <a> 
            <Image
              src={'/assests/logo.png'}
              width={100}
              height={100}
              alt='logo'
              className='image-logo'
            />
          </a>
          <a className='icon message'>
            <LuMessageSquare/>
          </a>
        </li>
      </ul>
      <ul className='main-menu'>    
      {items.map((item) => (
          <li key={item.label} className='menu-item'>
            <a
              href={item.path || '#'}
              onClick={() => handleSelect(item.path)}
              className={navigate === item.path ? 'icon active' : 'icon'}
            >
              {item.icon && <i>{item.icon}</i>}
            </a>
          </li>
        ))}
      </ul>
      <ul className='menu-bottom'>
      <li>
          <a> <Avatar text="John Doe" size={100} /></a>
          <a className='icon'>
            <LuLogOut/>
          </a>
        </li>
      </ul>

    </nav>
  );
};

export default Sidebar;
