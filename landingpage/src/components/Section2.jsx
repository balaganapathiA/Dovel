import React from "react";
import { FiRepeat,FiUsers,FiShield,FiDollarSign, FiClock ,FiTrendingUp,FiArrowUpRight } from "react-icons/fi"; // Feather Icons
export default function Section2(){
    return (<>
    {/* Features */}
              <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6 ">
                  <h2 className="text-sm text-teal-600 font-medium uppercase mb-4">FUTURE PAYMENT</h2>
                  <div className="flex justify-between">
                  <h2 className="text-4xl font-sans mb-12 pb-10">Experience that grows <br /> with your scale.</h2>
                  <p>Design a financial operating system that works for <br />your business and streamlined cash flow <br />management</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex flex-col "> 
                    {/* Icon above heading */}
                    <FiRepeat className="text-blue-600 text-2xl mb-2" /> 
                    
                    {/* Heading and text */}
                    <h3 className="font-bold">Free transfers</h3>
                    <p className="text-gray-600 mt-1">
                        Create a financial experience and automate payroll quickly.
                    </p>
                    </div>
                    <div className="flex flex-col ">
                        <FiUsers className="text-blue-600 text-2xl mb-2"/>
                      <h3 className="font-bold mb-2">Multiple accounts</h3>
                      <p className="text-gray-600">Operate with teams from your account and integrate solutions.</p>
                    </div>
                    <div className="flex flex-col ">
                    <FiShield className="text-blue-600 text-2xl mb-2"/>
                      <h3 className="font-bold mb-2">Unmatched security</h3>
                      <p className="text-gray-600">Manage your finances with bank-level authentication.</p>
                    </div>
                  </div>
                </div>
              </section></>);
}