import React from "react";
import { FiRepeat,FiUsers,FiShield,FiDollarSign, FiClock ,FiTrendingUp,FiArrowUpRight } from "react-icons/fi"; // Feather Icons

import { Button } from "./components/button";
import NoVolatilityCard from "./components/NovotalityCard";
import NavBar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Footer from "./components/Footer";
export default function FinpayLandingPage() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const currentValue = "1,876,580";
    return (
        <div className="bg-white text-gray-900">
          
            <NavBar/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Footer/>
         
        
          
    
          
        </div>
      );
    };

