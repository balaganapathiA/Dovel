import React from "react";
import { FiRepeat,FiUsers,FiShield,FiDollarSign, FiClock ,FiTrendingUp,FiArrowUpRight } from "react-icons/fi"; // Feather Icons

export default function Section5()
{
    return (<>
        <section className="bg-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-teal-500 font-medium tracking-widest">OUR MISSION</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                We've helped <br />innovative companies
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Hundreds of all sizes and across all industries have made big improvements with us.
              </p>
            </div>
    
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="text-center p-6  rounded-lg">
                <p className="text-4xl font-bold  mb-2">24%</p>
                <p className="text-gray-600">Revenue business</p>
              </div>
              <div className="text-center p-6  rounded-lg">
                <p className="text-4xl font-bold  mb-2">180K</p>
                <p className="text-gray-600">In annual revenue</p>
              </div>
              <div className="text-center p-6  rounded-lg">
                <p className="text-4xl font-bold  mb-2">10+</p>
                <p className="text-gray-600">Months of runway</p>
              </div>
            </div>
    
            {/* Pricing */}
            <div className="text-center">

              <h3 className="text-sm font-sans text-teal-600 mb-8">CHOOSE PLAN:</h3>
            </div>
            <div >
              <div className="flex flex-col md:flex-row justify-center gap-6 max-w-2xl mx-auto">
                <div className="border-2 border-teal-500 rounded-xl p-8 flex-1">
                <h4 className="text-2xlfont-bold text-[#2a8e9e] ">Plus</h4>
          <div className="flex items-baseline justify-between gap-2 mt-2 mb-4">
            <span className="relative top-12 pb-5 text-xl font-sans text-[#2a8e9e] ">£2.99/month</span>
            <button className=" relative top-12  text-[#2a8e9e] hover:text-[#237a88] transition">
              <FiArrowUpRight size={24} />
            </button>
          </div>
                </div>
                <div className="border-2 bg-[#2a8e9e] border-[#2a8e9e] rounded-xl p-6 flex-1">
          {/* Plan Name */}
          <h4 className="text-2xl font-bold text-[#E9F3F4] ">Premium</h4>
          <div className="flex items-baseline justify-between gap-2 mt-2 mb-4">
            <span className="relative top-12 pb-5 text-xl font-sans text-[#E9F3F4] ">£2.99/month</span>
            <button className=" relative top-12  text-[#E9F3F4] hover:text-[#237a88] transition">
              <FiArrowUpRight size={24} />
            </button>
          </div>
        </div>
              </div>
            </div>
          </div>
        </section>
    </>)
}