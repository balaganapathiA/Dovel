import React from "react";
import { FiRepeat,FiUsers,FiShield,FiDollarSign, FiClock ,FiTrendingUp,FiArrowUpRight } from "react-icons/fi"; // Feather Icons
import NoVolatilityCard from "./NovotalityCard";

export default function Section3(){
    return (<>{/* Stats Section */}
              <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 text-center justify-center">
                  <h2 className="text-sm text-teal-600 font-medium uppercase mb-4">Why us</h2>
                  <h3 className="text-2xl font-bold mb-12">Why they prefer Finpay</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-3xl font-bold text-teal-600 mb-2">3k+</h4>
                      <p>Businesses already running on Finpay</p>
                    </div>
                    {/* <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-3xl font-bold text-teal-600 mb-2">3k+</h4>
                      <p>Businesses already running on Finpay</p>
                    </div> */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                    
                        {/* <FiClock className="text-2xl font-bold text-teal-600 mb-3 absolute left-20" />  */}
    
                        <h4 className="relative left-[260px] text-3xl font-bold text-teal-600 mb-2"><FiClock/></h4>
                        <h3 className="font-bold text-lg ">Instant Withdraw</h3>
                        <p className="text-gray-600 mt-1">your funds at any time</p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg-gray-50 py-16">

          <NoVolatilityCard/>
          </section></>);
}