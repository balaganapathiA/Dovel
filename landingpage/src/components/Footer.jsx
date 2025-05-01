import React from "react";
export default function Footer(){
    return (<>{/* Footer */}
        <footer className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <div className="font-bold text-xl mb-4">Finpay</div>
              
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
          </div>
          <br />
          <div className="text-center"><p>© Finpay 2024. All rights reserved.</p></div>
        </footer></>)
}