

import React, { useEffect, useState } from "react";
import { IoIosAdd, IoIosSearch } from "react-icons/io";
import { MdGridOn, MdDeleteForever } from "react-icons/md";
import { FaListUl, FaRegEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type Member = {
  _id: string;
  fullName: string;
  designation: string;
  department?: string;
  status?: string;
  photo?: string;
};

const API_URL = "http://localhost:8080/api/members";

const DashBoard: React.FC = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axios.get(API_URL);
        setMembers(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);

  // FRONTEND FILTERING
  const filteredMembers = members.filter((member) => {
    const searchMatch =
      member.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.designation.toLowerCase().includes(searchTerm.toLowerCase());

    const departmentMatch =
      departmentFilter === "All" ||
      member.department === departmentFilter;

    const statusMatch =
      statusFilter === "All" || member.status === statusFilter;

    return searchMatch && departmentMatch && statusMatch;
  });

  const handleDelete = async (_id: string) => {
    if (!window.confirm("Are you sure?")) return;
    await axios.delete(`${API_URL}/${_id}`);
    setMembers((prev) => prev.filter((m) => m._id !== _id));
  };

  if (loading) return <p>Loading members...</p>;

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-semibold text-2xl">Team Members</h4>
          <p className="text-gray-400">
            Manage your organization's team members
          </p>
        </div>

        <button
          className="px-3 py-2 bg-blue-500 text-white rounded flex items-center gap-1"
          onClick={() => navigate("/add")}
        >
          <IoIosAdd /> Add Team Member
        </button>
      </div>

      <div className="flex justify-between bg-white p-3 rounded-xl border mt-5">
        <div className="flex gap-4">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded"
            />
            <IoIosSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="border px-4 py-2 rounded"
          >
            <option>All</option>
            <option>Management</option>
            <option>Programs</option>
            <option>Fundraising</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border px-4 py-2 rounded"
          >
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <div className="flex gap-2">
          <button className="p-2 border rounded">
            <MdGridOn />
          </button>
          <button className="p-2 border rounded">
            <FaListUl />
          </button>
        </div>
      </div>

      {filteredMembers.length === 0 ? <>
      
      
       <h2 className="text-2xl text-red-400 font-bold text-center mt-20">Team Members list is Empty </h2>
      </> : <>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">


        {filteredMembers.map((member) => (
          <div key={member._id} className="border p-4 rounded shadow-sm">
            <img
              src={
                member.photo
                  ? `http://localhost:8080${member.photo}`
                  : "/default-avatar.png"
              }
              className="h-24 w-24 rounded-full mx-auto object-cover"
            />

            <h3 className="text-center font-bold mt-2">
              {member.fullName}
            </h3>

            <p className="text-center text-gray-500">
              {member.designation}
            </p>

            <div className="flex justify-center gap-3 mt-3">
              <FaRegEdit
                  size={21}
                className="text-blue-600 cursor-pointer"
                onClick={() => navigate(`/edit-member/${member._id}`)}
              />
              <GrFormView
                className="text-black cursor-pointer"
                size={29}
                onClick={() => navigate(`/profile/${member._id}`)}
              />
              <MdDeleteForever
                className="text-red-600 cursor-pointer"
                size={22}
                onClick={() => handleDelete(member._id)}
              />
            </div>
          </div>
        ))}
      </div></>}

     
    </>
  );
};

export default DashBoard;

