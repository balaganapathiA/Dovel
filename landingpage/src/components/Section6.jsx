import React from "react";
import { FiRepeat,FiUsers,FiShield,FiDollarSign, FiClock ,FiTrendingUp,FiArrowUpRight } from "react-icons/fi"; // Feather Icons

import { Button } from "./button";
export default function Section6(){
    return (<>
    {/* Call to Action */}
    <section className="bg-teal-900 rounded-lg mx-auto max-w-[1200px] px-10 flex justify-between text-white py-16 p-10">
          <div>
          <p className="text-teal-300 font-medium tracking-widest pb-5">TRY IT NOW</p>
            <h3 className="text-4xl font-sans mb-4">Ready to level up your <br /> payment process?</h3>
            <p className="mb-6">Supports small businesses with simple invoicing,powerful <br />integrations, and cash flow management tools.</p>
          </div> 
            <div className="relative right-[150px] top-[80px] h-10 w-50 flex  gap-x-4">
              <Button className="" variant="secondary">Get Started Now</Button> 
              <Button 
  variant="" 
  className="text-white border bg-teal-900  border-white hover:bg-white/10 hover:text-white flex items-center gap-2"
>
  Learn More
  <FiArrowUpRight className="inline" />
</Button>
            </div>
          </section></>)
}