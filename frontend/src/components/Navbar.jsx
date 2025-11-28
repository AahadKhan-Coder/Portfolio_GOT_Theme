import React from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-primary bg-opacity-80 backdrop-blur-md p-4 z-50 flex justify-between items-center">
      <h1 className="font-gothic text-2xl">Abdul Aahad</h1>
      <ul className="flex space-x-6">
        {["Hero","About","Skills","Projects","Contact"].map((item)=>(
          <li key={item}>
            <Link
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gold transition"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
