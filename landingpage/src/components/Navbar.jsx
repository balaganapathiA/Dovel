import React from "react";

import { Button } from "./button";
export default function NavBar(){
    return (
        <>
        {/* Navbar */}
        <header className="flex justify-between items-center p-6 shadow-sm">
            <div className="text-2xl font-bold">Finpay</div>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="#" className="hover:underline">Products</a>
              <a href="#" className="hover:underline">Customers</a>
              <a href="#" className="hover:underline">Pricing</a>
              <a href="#" className="hover:underline">Learn</a>
            </nav>
            <div className="flex gap-2">
              <Button variant="ghost">Login</Button>
              <Button>Sign Up</Button>
            </div>
          </header></>
    );
}