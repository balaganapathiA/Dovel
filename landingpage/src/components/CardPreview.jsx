import { CreditCard, AccountBalance } from "@mui/icons-material";

export default function CardPreview() {
  return (
    <div className="relative w-80 h-88 p-6 rounded-2xl bg-white shadow-md space-y-4">

      {/* User Info */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#e0f2f1] flex items-center justify-center">
          <span className="text-teal-700 font-bold text-lg">D</span>
          
        </div>
          <div>
            
            <h4 className="font-semibold text-sm text-gray-900">Dipa Inhouse</h4>
            <p className="text-xs text-gray-500">dipainhouse@gmail.com</p>
          </div>
      </div>

      {/* Invoice */}
      <div>
        <p className="text-xs text-gray-500">Invoice</p>
        <h3 className="text-2xl font-bold text-gray-900">$1,876,580</h3>
        <p className="text-xs text-gray-500">April 21, 2024</p>
      </div>

      {/* Payment Options */}
      <div className="space-y-2">
        <label className="flex items-center p-3 rounded-lg border border-teal-500 cursor-pointer">
          <CreditCard className="text-gray-700 mr-2" />
          <span className="flex-grow text-sm text-gray-800">Credit Card</span>
          <input type="radio" name="payment" defaultChecked className="accent-teal-600" />
        </label>
        <label className="flex items-center p-3 rounded-lg border border-gray-300 cursor-pointer">
          <AccountBalance className="text-gray-700 mr-2" />
          <span className="flex-grow text-sm text-gray-800">Bank Account</span>
          <input type="radio" name="payment" className="accent-teal-600" />
        </label>
      </div>

      {/* Pay Button */}
      <button className="w-full py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition">
        Pay
      </button>

      {/* VISA Card */}
      <div className="absolute -top-14 right-0 w-15 h-48 bg-gradient-to-b from-teal-500 to-teal-700 rounded-xl text-white shadow-lg  flex flex-col justify-between">
        <div className="p-4"><div className="text-xs">Credit Card</div>
        <div className="text-md font-semibold">234 **** *****</div></div>
        
        <div className="flex rounded-b-xl justify-between bg-slate-900 h-19 p-0 items-center text-sm">
          <span className="font-bold p-4">VISA</span>
          <span className="text-lg p-4" >)))</span>
        </div>
      </div>
    </div>
  );
}
