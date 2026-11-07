import React from "react";
import { Phone, Building2, UserRound, ShieldCheck, Eye } from "lucide-react";
export default function UserCard({
  id,
  name,
  tel,
  role,
  branch,
  image,
  status,
  gender,
}) {
  return (
    <div
      key={id}
      className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition duration-300"
    >
      {/* Status */}
      <div className="flex justify-between items-center">
        <span
          className={`px-3 py-1 rounded-full
                text-xs font-semibold ${
                  status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
        >
          {status}
        </span>
        <span className="text-xs text-gray-400">ID: {id}</span>
      </div>

      {/* Profile */}
      <div className="flex items-center gap-4 mt-5">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-2xl object-cover border"
        />

        <div className="min-w-0">
          <h3 className="font-bold text-gray-800 text-lg truncate">{name}</h3>

          <span className="inline-block mt-1 px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-semibold">
            {role}
          </span>
        </div>
      </div>

      <div className="border-t border-gray-100 my-5" />
      {/* Information */}
      <div className="grid grid-cols-2 gap-5">
        <Info icon={<Building2 size={16} />} label="Branch" value={branch} />
        <Info icon={<Phone size={16} />} label="Telephone" value={tel} />
        <Info icon={<UserRound size={16} />} label="Gender" value={gender} />
        <Info icon={<ShieldCheck size={16} />} label="Role" value={role} />
      </div>
      <div className="border-t border-gray-100 my-5" />
      {/* Actions */}
      <div className="flex gap-2">
        <button className="flex-1 flex justify-center items-center gap-2 py-2.5 rounded-xl bg-blue-50 text-blue-600 text-sm font-semibold hover:bg-blue-600 hover:text-white transition">
          <Eye size={16} />
          View
        </button>
      </div>
    </div>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="min-w-0">
      <div className="flex items-center gap-2 text-gray-400 text-xs  mb-2">
        {icon}
        {label}
      </div>
      <p className="font-semibold text-sm text-gray-700 truncate">{value}</p>
    </div>
  );
}
