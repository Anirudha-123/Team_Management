import { Request, Response } from "express";
import Member ,{IMember} from "../models/Member";


export const addMember = async (req: Request, res: Response) => {
  try {
    const { fullName, designation, email, phone, department, joinDate, bio,status,    visible, } = req.body;

    // ✅ Server-side validation: check all required fields
    if (!fullName || !designation || !email || !phone || !department || !joinDate) {
      return res.status(400).json({
        message:
          "All fields are required: fullName, designation, email, phone, department, joinDate",
      });
    }

        const isVisible = visible === "true";


    // Build member object
    const memberData: Partial<IMember> = {
      fullName,
      designation,
      email,
      phone,
      department,
      joinDate,
      bio, // optional
      status:status || "Active",
         visible: isVisible,
    };

    // Add photo if uploaded
    if (req.file) {
      memberData.photo = `/uploads/${req.file.filename}`;
    }

    // Create member
    const member = await Member.create(memberData);

    res.status(201).json(member);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateMember = async (req: Request, res: Response) => {
  try {
    const { fullName, designation, email, phone, department, joinDate, bio } = req.body;

    // Server-side validation for required fields
    if (!fullName || !designation || !email || !phone || !department || !joinDate) {
      return res.status(400).json({ 
        message: "All fields (fullName, designation, email, phone, department, joinDate) are required" 
      });
    }

    // Build update object
    const updateData: Partial<IMember> = {
      fullName,
      designation,
      email,
      phone,
      department,
      joinDate,
      bio, // optional
    };

    // If file is uploaded
    if (req.file) {
      updateData.photo = `/uploads/${req.file.filename}`;
    }

    // Update member
    const member = await Member.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    res.json(member);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getMembers = async (req: Request, res: Response) => {
  try {
    const members = await Member.find().sort({ createdAt: -1 });
    res.json(members);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getMemberById = async (req: Request, res: Response) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.json(member);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// export const updateMember = async (req: Request, res: Response) => {
//   try {
//     const member = await Member.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.json(member);
//   } catch (error: any) {
//     res.status(400).json({ message: error.message });
//   }
// };

export const deleteMember = async (req: Request, res: Response) => {
  try {
    await Member.findByIdAndDelete(req.params.id);
    res.json({ message: "Member deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};


export const getMemberss = async (req: Request, res: Response) => {
  try {
    const { search, department, status } = req.query;

    let filter: any = {};

    if (search) {
      // Case-insensitive search on fullName
      filter.fullName = { $regex: search, $options: "i" };
    }

    if (department && department !== "All") {
      filter.department = department;
    }

    if (status && status !== "All") {
      filter.status = status;
    }

    const members = await Member.find(filter).sort({ createdAt: -1 });
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch members" });
  }
};
