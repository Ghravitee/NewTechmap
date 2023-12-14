import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Flowbite>
      <Navbar fluid rounded className="border-b">
        <Link to={"/"} className="font-bold text-2xl dark:text-white">Techmap</Link>
        <div className="flex md:order-2 gap-4">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Username</span>
              <span className="block truncate text-sm font-medium">
                email
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <DarkThemeToggle />
          <Navbar.Toggle />
         
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active className="block sm:hidden">
            Dashboard
          </Navbar.Link>
          <Navbar.Link href="/users" className="block sm:hidden">Users</Navbar.Link>
          <Navbar.Link href="/request" className="block sm:hidden">Request</Navbar.Link>
          <Navbar.Link href="#" className="block sm:hidden">Signout</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
}

export default NavbarComponent;
