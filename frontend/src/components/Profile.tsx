import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaCalendarAlt,
} from "react-icons/fa";
import axios from "axios";

type Member = {
  _id: string;
  fullName: string;
  designation: string;
  email?: string;
  phone?: string;
  department?: string;
  joinDate?: string;
  bio?: string;
  photo?: string;
};

const API_URL = "https://team-management-backend-7d1o.onrender.com/api/members";

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log("id")
  const navigate = useNavigate();
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const res = await axios.get(`${API_URL}/${id}`);
        setMember(res.data);
        console.log(res.data)
      } catch (error) {
        console.error("Failed to load profile", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [id]);

  if (loading) {
    return <p className="p-6 text-center">Loading profile...</p>;
  }

  if (!member) {
    return (
      <p className="p-6 text-center text-gray-500 text-lg">
        Profile not found
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <FaArrowLeft /> Back
      </button>

      <div className="mx-auto max-w-4xl rounded-xl bg-white shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-50 p-8 flex flex-col md:flex-row items-center gap-6">
          <img
            src={
              member.photo
                ? `https://team-management-backend-7d1o.onrender.com${member.photo}`
                : "/default-avatar.png"
            }
            alt={member.fullName}
            className="h-36 w-36 rounded-full object-cover border-4 border-white"
          />
          <div>
            <h1 className="text-3xl font-bold">{member.fullName}</h1>
            <p className="mt-2 text-gray-600 capitalize">
              {member.designation}
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="p-8 grid md:grid-cols-2 gap-8 border-b">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaEnvelope />
              <span>{member.email || "-"}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone />
              <span>{member.phone || "-"}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaBuilding />
              <span>{member.department || "-"}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCalendarAlt />
              <span>{member.joinDate || "-"}</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        {member.bio && (
          <div className="p-8 bg-gray-50">
            <h2 className="text-xl font-semibold mb-2">Bio</h2>
            <p>{member.bio}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
