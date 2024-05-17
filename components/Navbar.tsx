import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-8 lg:py-8 lg:px-14">
      <div>
        <p className="font-bold text-xl md:text-3xl">WanderWise</p>{" "}
      </div>
      <div className="hidden lg:flex">
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label} className="font-semibold">
              <Link href={link.route}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="font-semibold">user details</div>
    </nav>
  );
};

export default Navbar;
