import { useState } from "react";
import { Plus } from "lucide-react";
import Pagination from "../../components/layout/Pagination";
import { Button } from "antd";
import UserCard from "../../components/card/usercard/UserCard";

const initialUsers = [
  {
    id: 1,
    name: "Sok Dara",
    image: "https://i.pravatar.cc/150?img=12",
    status: "Active",
    role: "Admin",
    branch: "Phnom Penh",
    tel: "012 345 678",
    gender: "Male",
  },
  {
    id: 2,
    name: "Srey Nich",
    image: "https://i.pravatar.cc/150?img=47",
    status: "Active",
    role: "Manager",
    branch: "Siem Reap",
    tel: "096 123 456",
    gender: "Female",
  },
  {
    id: 3,
    name: "Vannak",
    image: "https://i.pravatar.cc/150?img=11",
    status: "Inactive",
    role: "User",
    branch: "Battambang",
    tel: "088 456 789",
    gender: "Male",
  },
  {
    id: 4,
    name: "Sophea",
    image: "https://i.pravatar.cc/150?img=44",
    status: "Active",
    role: "User",
    branch: "Phnom Penh",
    tel: "010 222 333",
    gender: "Female",
  },
  {
    id: 5,
    name: "Rith",
    image: "https://i.pravatar.cc/150?img=13",
    status: "Active",
    role: "Manager",
    branch: "Siem Reap",
    tel: "097 888 999",
    gender: "Male",
  },
  {
    id: 6,
    name: "Davy",
    image: "https://i.pravatar.cc/150?img=49",
    status: "Inactive",
    role: "User",
    branch: "Battambang",
    tel: "011 555 666",
    gender: "Female",
  },
];

export default function User() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div className="w-full h-full p-4 md:p-7">
      {/* Header */}
      <div className="flex  justify-between gap-4 mb-7">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your users and their information
          </p>
        </div>
        <Button className="flex! items-center! justify-center!  gap-2! px-5! py-3! bg-blue-600! text-white! rounded-xl! font-semibold! hover:bg-blue-700! transition!">
          <Plus size={20} />
          Add User
        </Button>
      </div>
      {/* Search & Filter */}
      {/* User Cards */}
      <div className="grid  grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {users.map((user) => {
          return (
            <UserCard
              id={user.id}
              name={user.name}
              gender={user.gender}
              tel={user.tel}
              role={user.role}
              branch={user.branch}
              status={user.status}
            />
          );
        })}
      </div>
      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-7 ">
        <Pagination totalPages={1} />
      </div>
    </div>
  );
}
