'use client'
import React from 'react'
import { TabMenu } from 'primereact/tabmenu';
import { MenuItem } from 'primereact/menuitem';
import { Dropdown } from 'primereact/dropdown';
import { useRouter } from 'next/navigation';
import { Nav } from './style';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import HomeIcon from '@mui/icons-material/Home';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import Link from 'next/link';

export default function Navbar() {
  return (
    <Nav>
        <LocalHospitalIcon className='logo'/>
        <ul>
          <li><Link className='link' href='/'><HomeIcon className='icon'/>Home</Link></li>
          <li> <Link className='link' href='/healthStation'><HealthAndSafetyIcon  className='icon'/>Posto</Link></li>
          <li><Link className='link' href='/services'><VaccinesIcon  className='icon'/>services</Link></li>
        </ul>
    </Nav>
    
  )
}
