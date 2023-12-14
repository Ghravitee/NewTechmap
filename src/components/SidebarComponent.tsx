import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiUser } from 'react-icons/hi';
import {MdDashboard} from 'react-icons/md'

const SidebarComponent = () => {
  return (
    <div><Sidebar aria-label="Default sidebar example" className='dark:rounded-none hidden sm:block'>
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="/" icon={MdDashboard}>
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item href="/users" icon={HiUser}>
          Users
        </Sidebar.Item>
        <Sidebar.Item href="/request" icon={HiUser}>
          Request
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiArrowSmRight}>
          Sign out
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar></div>
  )
}

export default SidebarComponent