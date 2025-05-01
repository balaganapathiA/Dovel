import React from "react";

import { FiRepeat,FiUsers,FiShield,FiDollarSign, FiClock ,FiTrendingUp,FiArrowUpRight } from "react-icons/fi"; // Feather Icons

export default function Section4(){
    return (<>
     {/* Steps */}
              <section className="bg-[#180d39] text-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className=" mb-16">
              <span className="text-teal-300 font-medium tracking-widest">STEP</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 leading-tight">
                Maximize your returns with a <br /> Reserve account that generates
              </h2>
              {/* <div className="w-24 h-1 bg-teal-500 mx-auto"></div> */}
            </div>
    
            {/* Steps */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative bg-teal-800/30 p-8 rounded-xl border border-teal-700/50">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-white text-teal-900 rounded-full flex items-center justify-center font-bold text-xl border-4 border-teal-900">
                  1
                </div>
                <div className="flex items-center mb-4">
                  <div className="bg-teal-600 p-3 rounded-full mr-4">
                    <FiUsers className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold">Open your account</h3>
                </div>
                <p className="text-teal-100 pl-16">
                  Sign up to fringey and set up your account from the dashboard.
                </p>
              </div>
    
              {/* Step 2 */}
              <div className="relative bg-teal-800/30 p-8 rounded-xl border border-teal-700/50">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-white text-teal-900 rounded-full flex items-center justify-center font-bold text-xl border-4 border-teal-900">
                  2
                </div>
                <div className="flex items-center mb-4">
                  <div className="bg-teal-600 p-3 rounded-full mr-4">
                    <FiDollarSign className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold">Transfer your money</h3>
                </div>
                <p className="text-teal-100 pl-16">
                  Move money from another account into and start earning up.
                </p>
              </div>
    
              {/* Step 3 */}
              <div className="relative bg-teal-800/30 p-8 rounded-xl border border-teal-700/50">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-white text-teal-900 rounded-full flex items-center justify-center font-bold text-xl border-4 border-teal-900">
                  3
                </div>
                <div className="flex items-center mb-4">
                  <div className="bg-teal-600 p-3 rounded-full mr-4">
                    <FiTrendingUp className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold">Watch your balance grow</h3>
                </div>
                <p className="text-teal-100 pl-16">
                  Accessed instantly and remain insulated from market volatility.
                </p>
              </div>
            </div>
          </div>
        </section></>)
}