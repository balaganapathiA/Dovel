import React from "react";
import finpay from "../font-images/Finpay.png"
import { Facebook, Linkedin, Twitter } from "lucide-react";
export default function Footer(){
    return (<>{/* Footer */}
        <footer className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-8 text-sm">
            <div>
              {/* <div className="font-bold text-xl mb-4">Finpay</div> */}
              <img src={finpay} alt="finpay" />
            </div>
            
            <div>
              
              <h4 className="font-semibold mb-2">Solutions</h4>
              <ul>
                <li>Small businesses</li>
                <li>Freelancers</li>
                <li>Customers</li>
                <li>Taxes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Learn</h4>
              <ul>
                <li>Blog</li>
                <li>Guides</li>
                <li>Templates</li>
              </ul>
              
            </div>
            <div className="flex flex-col ">
      <p className="text-gray-700 font-semibold">Follow us on</p>
      <div className="flex gap-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-6 h-6 text-[#1DA1F2] hover:opacity-75" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 text-[#0077B5] hover:opacity-75" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-6 h-6 text-[#4267B2] hover:opacity-75" />
        </a>
      </div>
    </div>
          </div>
          <br />
          <div className="text-center"><p>© Finpay 2024. All rights reserved.</p></div>
        </footer></>)
}