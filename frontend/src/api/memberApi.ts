import axios from "axios";

const API_URL = "https://team-management-backend-7d1o.onrender.com/api/members";

/* ➕ Add Member */
export const createMember = async (data: any) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

/* 📥 Get Members */
export const fetchMembers = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

/* ✏️ Update Member */
export const updateMemberApi = async (id: string, data: any) => {
  const res = await axios.put(`${API_URL}/${id}`, data);
  return res.data;
};

/* ❌ Delete Member */
export const deleteMemberApi = async (id: string) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
