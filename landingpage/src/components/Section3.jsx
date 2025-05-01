import React from "react";
import { FiRepeat,FiUsers,FiShield,FiDollarSign, FiClock ,FiTrendingUp,FiArrowUpRight } from "react-icons/fi"; // Feather Icons
import NoVolatilityCard from "./NovotalityCard";
import logo from "../font-images/Image1.png"

export default function Section3(){
    return (<>{/* Stats Section */}
              <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 ">
                  <div className="text-center">
                  <h2 className="text-sm text-teal-600 font-medium uppercase mb-4">Why us</h2>
                  <h3 className="text-3xl font-sans mb-12">Why they prefer Finpay</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="relative py-10 text-7xl font-bold text-teal-600 mb-2">3k+</h4>
                      <p className="text-2xl">Businesses already running <br />on Finpay</p>
                    </div>
                    {/* <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-3xl font-bold text-teal-600 mb-2">3k+</h4>
                      <p>Businesses already running on Finpay</p>
                    </div> */}
                    <div className="bg-gray-50 p-6 rounded-lg flex flex-col align-center">
                    
    
                        <h3 className="font-sans text-2xl py-2">Instant Withdraw your funds <br />at any time</h3>
                        {/* <p className="text-gray-600 mt-1"></p> */}
                        <img src={logo} alt="ok" className="h-45 w-60 relative left-[160px] mb-2 py-10"/>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg-gray-50 py-16">

          <NoVolatilityCard/>
          </section></>);
}