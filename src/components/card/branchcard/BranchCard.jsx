import {
  ArrowUpRight,
  Building2Icon,
  Icon,
  MapPin,
  Users,
  Wallet,
} from "lucide-react";
import React from "react";

export default function BranchCard({ name, location, user, revenue, status }) {
  return (
    <div className=" bg-white rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#E2E8F0]">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="p-3 rounded-xl bg-blue-100 text-blue-600 ">
          <Building2Icon size={25} />
        </div>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${status ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
        >
          {status ? "Active" : "Inactive"}
        </span>
      </div>
      <h3 className="text-lg font-bold text-gray-800">{name}</h3>

      <div className="flex items-center gap-1 text-sm text-gray-400 mt-1">
        <MapPin size={14} />
        {location}
      </div>
      <div className="border-t border-gray-100 my-5" />
      {/* User */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
            <Users size={18} />
          </div>
          <span className="text-sms text-gray-500">Total Users</span>
        </div>
        <span className="font-bold text-gray-800">{user}</span>
      </div>
      {/* Revenue */}
      <div className="flex items-center gap-2 mb-2">
        <div className="p-2 bg-green-50 text-green-600 rounded-lg">
          <Wallet size={18} />
        </div>
        <span className="text-sm text-gray-500">Total Revenue</span>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-600">
          ${revenue.toLocaleString()}
        </h2>
        <button className="p-2 rounded-full bg-gray-50 hover:bg-blue-50 text-gray-500 hover:text-blue-500">
          <ArrowUpRight size={20} />
        </button>
      </div>
      {/* Footer */}
      <button className="w-full mt-5 py-2.5 rounded-xl bg-gray-50 text-gray-600 font-bold hover:bg-blue-600 hover:text-white transition">
        View Details
      </button>
    </div>
  );
}
