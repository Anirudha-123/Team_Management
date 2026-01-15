// import React, { useState } from "react";
// import { IoSettings } from "react-icons/io5";
// import { MdDescription } from "react-icons/md";
// import { FaCamera } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const AddNewMember = () => {
//   const navigate = useNavigate();



//   const [email, setEmail] = useState("");
//   const [designation, setDesignation] = useState("");
  

//   const handleSave = () => {
//     const newMember = { email, designation };

//     const existing =
//       JSON.parse(localStorage.getItem("members")) || [];

//     localStorage.setItem(
//       "members",
//       JSON.stringify([...existing, newMember])
//     );

//     navigate("/dashboard");
//   };


//   return (
//     <div className="bg-gray-50 p-6">
//       <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
//         <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
//           <FaUser />
//           Basic Information
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="text-sm font-medium">Full Name *</label>
//             <input
//               type="text"
//               placeholder="Enter full name"
              
//               className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           <div>
//             <label className="text-sm font-medium">Designation *</label>
//             <input
//               type="text"
//               placeholder="e.g. Program Manager"
//                 value={designation}
//               onChange={(e) => setDesignation(e.target.value)}
//               className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           <div>
//             <label className="text-sm font-medium">Email Address</label>
//             <input
//               type="email"
//               placeholder="email@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg"
//             />
//           </div>

//           <div>
//             <label className="text-sm font-medium">Phone Number</label>
//             <input
//               type="text"
//               placeholder="+1 (555) 123-4567"
//               className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg"
//             />
//           </div>

//           <div>
//             <p className="text-sm font-medium">Department</p>
//             <select className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg">
//               <option>Select Department</option>
//               <option>Management</option>
//               <option>Programs</option>
//               <option>Fundraising</option>
//             </select>
//           </div>

//           <div>
//             <label className="text-sm font-medium">Join Date</label>
//             <input
//               type="date"
//               className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//       {/* <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
//         <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
//           <FaCamera />
//           Profile Photo
//         </h2>

//         <div className="flex gap-6 items-center">
//           <div className="w-24 h-24 bg-gray-100 border border-dashed border-gray-300 rounded-lg flex items-center justify-center">
//             <FaUser />
//           </div>

//           <div className="flex-1 border border-dashed border-gray-300 rounded-lg p-6 text-center">
//             <p className="text-sm">
//               Drag and drop your photo here, or{" "}
//               <span className="text-blue-600 cursor-pointer">browse</span>
//             </p>
//             <p className="text-xs text-gray-500 mt-1">
//               PNG, JPG, GIF up to 10MB
//             </p>
//           </div>
//         </div>
//       </div> */}

//       <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
//         <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
//           <MdDescription />
//           Biography
//         </h2>

//         <p className="text-sm font-medium">Bio Description</p>
//         <textarea
//           rows="5"
//           placeholder="Write a brief biography about the team member..."
//           className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg"
//         ></textarea>

//         <p className="text-xs text-gray-500 mt-2">Maximum 500 characters</p>
//       </div>
//       {/* <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
//         <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
//           <IoSettings />
//           Status & Settings
//         </h2>

//         <div className="flex justify-between items-center">
//           <div>
//             <p className="font-medium">Status</p>
//             <p className="text-sm text-gray-500">
//               Toggle to activate or deactivate team member
//             </p>
//           </div>
//           <input type="checkbox" defaultChecked className="w-5 h-5" />
//         </div>

//         <div className="flex justify-between items-center mt-4">
//           <div>
//             <p className="font-medium">Display on Website</p>
//             <p className="text-sm text-gray-500">
//               Show this member on the public team page
//             </p>
//           </div>
//           <input type="checkbox"  className="w-5 h-5" />
//         </div>
//       </div> */}
//       <div className="flex justify-between">
//         <button
//           className="px-6 py-2 border border-gray-300 rounded-lg"
//           onClick={() => navigate("/dashboard")}
//         >
//           Cancel
//         </button>

//         <div className="flex gap-3">
//           <button
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             onClick={handleSave}
//           >
//             Save Team Member
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddNewMember;


//second 



// import React, { useState, useEffect } from "react";
// import { IoSettings } from "react-icons/io5";
// import { MdDescription } from "react-icons/md";
// import { FaCamera, FaUser } from "react-icons/fa";
// import { useNavigate, useParams } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// const AddNewMember = () => {
//   const navigate = useNavigate();
//   const { id } = useParams(); // id exists only in edit mode
//   const { cart, addToCart, updateMember } = useCart();

//   const memberToEdit = cart.find((m) => m.id === Number(id));

//   // Form state
//   const [fullName, setFullName] = useState("");
//   const [designation, setDesignation] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [department, setDepartment] = useState("");
//   const [joinDate, setJoinDate] = useState("");
//   const [bio, setBio] = useState("");

//   // Pre-fill form if editing
//   useEffect(() => {
//     if (memberToEdit) {
//       setFullName(memberToEdit.fullName || "");
//       setDesignation(memberToEdit.designation || "");
//       setEmail(memberToEdit.email || "");
//       setPhone(memberToEdit.phone || "");
//       setDepartment(memberToEdit.department || "");
//       setJoinDate(memberToEdit.joinDate || "");
//       setBio(memberToEdit.bio || "");
//     }
//   }, [memberToEdit]);

//   const handleSave = () => {
//     const memberData = {
//       id: memberToEdit ? memberToEdit.id : Date.now(),
//       fullName,
//       designation,
//       email,
//       phone,
//       department,
//       joinDate,
//       bio,
//     };

//     if (memberToEdit) {
//       updateMember(memberToEdit.id, memberData);
//     } else {
//       addToCart(memberData);
//     }

//     navigate("/dashboard");
//   };

//   return (
//     <div className="bg-gray-50 p-6">
//       <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
//         <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
//           <FaUser />
//           Basic Information
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="text-sm font-medium">Full Name *</label>
//             <input
//               type="text"
//               placeholder="Enter full name"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           <div>
//             <label className="text-sm font-medium">Designation *</label>
//             <input
//               type="text"
//               placeholder="e.g. Program Manager"
//               value={designation}
//               onChange={(e) => setDesignation(e.target.value)}
//               className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           <div>
//             <label className="text-sm font-medium">Email Address</label>
//             <input
//               type="email"
//               placeholder="email@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg"
//             />
//           </div>

//           <div>
//             <label className="text-sm font-medium">Phone Number</label>
//             <input
//               type="text"
//               placeholder="+1 (555) 123-4567"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg"
//             />
//           </div>

//           <div>
//             <p className="text-sm font-medium">Department</p>
//             <select
//               className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg"
//               value={department}
//               onChange={(e) => setDepartment(e.target.value)}
//             >
//               <option>Select Department</option>
//               <option>Management</option>
//               <option>Programs</option>
//               <option>Fundraising</option>
//             </select>
//           </div>

//           <div>
//             <label className="text-sm font-medium">Join Date</label>
//             <input
//               type="date"
//               value={joinDate}
//               onChange={(e) => setJoinDate(e.target.value)}
//               className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
//         <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
//           <MdDescription />
//           Biography
//         </h2>

//         <p className="text-sm font-medium">Bio Description</p>
//         <textarea
//           rows="5"
//           placeholder="Write a brief biography about the team member..."
//           value={bio}
//           onChange={(e) => setBio(e.target.value)}
//           className="mt-1 w-full px-4 py-2 border border-gray-200 rounded-lg"
//         ></textarea>

//         <p className="text-xs text-gray-500 mt-2">Maximum 500 characters</p>
//       </div>

//       <div className="flex justify-between">
//         <button
//           className="px-6 py-2 border border-gray-300 rounded-lg"
//           onClick={() => navigate("/dashboard")}
//         >
//           Cancel
//         </button>

//         <div className="flex gap-3">
//           <button
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             onClick={handleSave}
//           >
//             {memberToEdit ? "Update Member" : "Add New Member"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddNewMember;


//forth