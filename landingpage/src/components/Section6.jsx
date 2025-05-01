import React from "react";
import { FiRepeat,FiUsers,FiShield,FiDollarSign, FiClock ,FiTrendingUp,FiArrowUpRight } from "react-icons/fi"; // Feather Icons

import { Button } from "./button";
export default function Section6(){
    return (<>
    {/* Call to Action */}
    <section className="bg-teal-900 text-white py-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to level up your payment process?</h3>
            <p className="mb-6">Supports small businesses with invoicing, integrations, and cash flow tools.</p>
            <div className="flex justify-center gap-4">
              <Button variant="secondary">Get Started Now</Button>
              <Button variant="ghost" className="text-white border border-white">Learn More</Button>
            </div>
          </section></>)
}