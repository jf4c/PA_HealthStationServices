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

export default function Navbar() {
  const router = useRouter();
  const route: MenuItem[] = [
    {label: 'home', icon:() => <HomeIcon/>,  command: () => router.push('/')},
    {label: 'posto', icon:() => <HealthAndSafetyIcon/>, command: () => router.push('/healthStation')},
    {label: 'Serviços', icon:() => <VaccinesIcon/>, command: () => router.push('/services')},
    {label: 'Teste', icon: 'pi pi-home', command: () => router.push('/healthStation')},
  ];
  
  return (
    <Nav>
      <LocalHospitalIcon className='icon'/>
      <div className="Card flex align-items-center">
        <TabMenu model={route}/>
      </div>
    </Nav>
    
  )
}
