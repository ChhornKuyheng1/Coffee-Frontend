import { Button } from "antd";
import { Plus } from "lucide-react";
import React from "react";
import BranchCard from "../../components/card/branchcard/BranchCard";

export default function Branch() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-7">
      <div className="flex  justify-between gap-4 mb-7">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Branch Management
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your branch and their information
          </p>
        </div>

        <Button className="flex! items-center! justify-center!  gap-2! px-5! py-3! bg-blue-600! text-white! rounded-xl! font-semibold! hover:bg-blue-700! transition!">
          <Plus size={20} />
          Add User
        </Button>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5  ">
        <BranchCard
          name={" Phnom Panh"}
          location={"Phnom Panh"}
          user={10}
          revenue={5000}
          status={true}
        />
        <BranchCard
          name={" Phnom Panh"}
          location={"Phnom Panh"}
          user={10}
          revenue={5000}
          status={true}
        />
        <BranchCard
          name={" Phnom Panh"}
          location={"Phnom Panh"}
          user={10}
          revenue={5000}
          status={true}
        />
        <BranchCard
          name={" Phnom Panh"}
          location={"Phnom Panh"}
          user={10}
          revenue={5000}
          status={true}
        />
      </div>
    </div>
  );
}
