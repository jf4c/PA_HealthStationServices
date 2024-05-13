'use client'
import React from 'react'
import { TabMenu } from 'primereact/tabmenu';
import { MenuItem } from 'primereact/menuitem';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const route: MenuItem[] = [
    {label: 'home', icon: 'pi pi-home', command: () => router.push('/')},
    {label: 'posto', icon: 'pi pi-home', command: () => router.push('/healthStation')},
    {label: 'Serviços', icon: 'pi pi-home', command: () => router.push('/services')},
  ];
  
  return (
    <nav className="flex justify-content-between" style={{backgroundColor: "silver"}}>
      <span className="pi pi-heart-fill flex align-items-center" style={{ fontSize: '2rem' }}></span>
      <div className="Card flex align-items-center">
        <TabMenu model={route}/>
      </div>
    </nav>
    
  )
}
