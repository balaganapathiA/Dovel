import React from "react";
import { Button } from "./button";
import { FiRepeat,FiUsers,FiShield,FiDollarSign, FiClock ,FiTrendingUp,FiArrowUpRight } from "react-icons/fi"; // Feather Icons

import CardPreview from "./CardPreview";
export default function Section1(){
    return (<>
    {/* Hero Section */}
              <section className="px-6 py-16 text-center md:text-left md:flex md:justify-between md:items-center max-w-7xl mx-auto">
                <div className="max-w-xl">
                  <h1 className="text-4xl font-bold leading-tight mb-4">
                    Get paid early<br />
                    save automatically<br />
                    all your pay.
                  </h1>
                  <p className="text-gray-600 mb-6">
                    Supports small businesses with simple invoicing,<br />
                    powerful integrations, and cash flow management tools.
                  </p>
                  <div className="flex ">
                    <input
                      type="email"
                      placeholder="Your business email"
                      className="border px-4 py-2 rounded-md w-full max-w-xs"
                    />
                    <Button className="px-4 py-2 rounded-md w-full max-w-xs">Get Started <FiArrowUpRight className="inline"/></Button>
                  </div>
                  <div className="mt-6 flex gap-6">
                    <img src="https://iolla.com/sites/default/files/styles/coh_x_large/public/2022-09/Klarna_Logo-update.jpg?itok=jBAqpxbw" alt="Klarna" className="h-6" />
                    <img src="https://thaka.bing.com/th/id/OIP.yGNRgAXuRUqoOdeD1274qAHaBU?rs=1&pid=ImgDetMain" alt="Coinbase" className="h-6" />
                    <img src="https://thaka.bing.com/th/id/OIP.jnYSF3-XyUAGPoQdW-yRggHaBW?w=550&h=100&rs=1&pid=ImgDetMain" alt="Instacart" className="h-6" />
                  </div>
                </div>
                <div >
                  <CardPreview/>
                </div>
              </section></>);
}