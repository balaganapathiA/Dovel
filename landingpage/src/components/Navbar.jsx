import React from "react";

import { Button } from "./button";
import finpay from "../font-images/Finpay.png"
export default function NavBar(){
    return (
        <>
        {/* Navbar */}
        <header className="flex justify-between items-center p-6 bg-[#f5f9fa] shadow-sm">
            {/* <div className="text-2xl font-bold">Finpay</div> */}
            <div className="gap-x-10 text-sm flex justify-between items-center">
              
              <img src={finpay} alt="" className="w-30 h-10"/>
              
              
              <a href="#" className="font-sans text-xl">Products</a>
              <a href="#" className="font-sans text-xl">Customers</a>
              <a href="#" className="font-sans text-xl">Pricing</a>
              <a href="#" className="font-sans text-xl">Learn</a>
            </div>
            <div className="flex gap-2">
              <Button className="bg-[#F5F9FA] text-[BLACK] border border-black">Login</Button>
              <Button>Sign Up</Button>
            </div>
          </header></>
    );
}