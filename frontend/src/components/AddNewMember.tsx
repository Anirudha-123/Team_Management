import React, { useState, useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { MdDescription } from "react-icons/md";
import { FaCamera, FaUser } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const API_URL = "https://team-management-backend-7d1o.onrender.com/api/members";

const AddNewMember: React.FC = () => {
  const [isActive, setIsActive] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    email: "",
    phone: "",
    department: "",
    joinDate: "",
    bio: "",
    status: "Active",
  });

  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  // Fetch member if editing
  useEffect(() => {
    if (id) {
      axios.get(`${API_URL}/${id}`).then((res) => {
        setFormData({
          fullName: res.data.fullName || "",
          designation: res.data.designation || "",
          email: res.data.email || "",
          phone: res.data.phone || "",
          department: res.data.department || "",
          joinDate: res.data.joinDate || "",
          bio: res.data.bio || "",
          status: res.data.status || "Active",
        });

        if (res.data.photo) {
          setPhotoPreview(`https://team-management-backend-7d1o.onrender.com${res.data.photo}`);
        }
      });
    }
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    if (!formData.fullName || !formData.designation) {
      alert("Full Name and Designation are required");
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (photo) data.append("photo", photo);

    try {
      if (id) {
        await axios.put(`${API_URL}/${id}`, data);
      } else {
        await axios.post(API_URL, data);
      }
      navigate("/dashboard");
    } catch (error) {
      console.error("Save failed", error);
      alert("Failed to save member");
    }
  };

  return (
    <div className="bg-gray-50 p-6">
      {/* Basic Info Section */}

      
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
          <FaUser /> Basic Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/** Full Name */}
          <div>
            <label className="text-sm font-medium">Full Name *</label>
            <Input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter full name"
              className="mt-1"
            />
          </div>

          {/** Designation */}
          <div>
            <label className="text-sm font-medium">Designation *</label>
            <Input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              placeholder="manager"
              className="mt-1"
            />
          </div>

          {/** Email */}
          <div>
            <label className="text-sm font-medium">Email Address</label>
            <Input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email name"
              className="mt-1"
            />
          </div>

          {/** Phone */}
          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <Input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1"
            />
          </div>

          {/** Department */}
          <div>
            <label className="text-sm font-medium">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg 
             focus:outline-none  focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            >
              <option value="">Select Department</option>
              <option value="Management">Management</option>
              <option value="Programs">Programs</option>
              <option value="Fundraising">Fundraising</option>
            </select>
          </div>

          {/** Join Date */}
          <div>
            <label className="text-sm font-medium">Join Date</label>
            <Input
              type="date"
              name="joinDate"
              value={formData.joinDate}
              onChange={handleInputChange}
              className="mt-1"
            />
          </div>
        </div>
      </div>

      {/* Profile Photo Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
          <FaCamera /> Profile Photo
        </h2>

        <div className="flex gap-6 items-center">
          <div className="w-24 h-24 bg-gray-100 border border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            {photoPreview ? (
              <img
                src={photoPreview}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <FaUser size={32} className="text-gray-400" />
            )}
          </div>

          <div className="flex-1 border border-dashed border-gray-300 rounded-lg p-6 text-center">
            <p className="text-sm">
              Drag and drop your photo here, or{" "}
              <label className="text-blue-600 cursor-pointer">
                browse
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
              </label>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
          <MdDescription /> Biography
        </h2>

        <Textarea
          name="bio"
          rows={5}
          value={formData.bio}
          onChange={handleInputChange}
          placeholder="Write a brief biography about the team member..."
          className="mt-1"
        />

        <p className="text-xs text-gray-500 mt-2">Maximum 500 characters</p>
      </div>

      <div className=" bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-5">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <FiSettings className="text-gray-700 text-xl" />
            Status & Settings
          </h3>
        </div>

        {/* Status Checkbox */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.status === "Active"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.checked ? "Active" : "Inactive",
                  })
                }
                className="w-5 h-5 accent-blue-600"
              />
              <span className="text-gray-700 font-medium">Status</span>
            </label>

            <p className="text-sm text-gray-500 ml-7">
              Toggle to activate or deactivate team member
            </p>
          </div>

          <span
            className={`text-sm font-semibold ${
              formData.status === "Active" ? "text-green-600" : "text-gray-400"
            }`}
          >
            {formData.status === "Active" ? "Active" : "Inactive"}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <Button
          className="border border-gray-300"
          onClick={() => navigate("/dashboard")}
        >
          Cancel
        </Button>

        <Button
          className="bg-blue-600 text-white hover:bg-blue-700"
          onClick={handleSave}
        >
          {id ? "Update Member" : "Add New Member"}
        </Button>
      </div>
    </div>
  );
};

export default AddNewMember;
