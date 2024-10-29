// import React from 'react';

import { useState } from "react";
import Link from "../Link/Link";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
    const [open, setOpen] =useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/faq", name: "FAQ" }
      ];

    return (
        <nav>
            <div className="md:hidden text-xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoMdClose></IoMdClose> 
                    : <LuMenu></LuMenu>
                }
                
            </div>
            <ul className="md:flex">
                {
                    routes.map(route =><Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;