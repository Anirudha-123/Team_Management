import express from "express";
import multer from "multer";
import {
  addMember,
  updateMember,
  getMembers,
  getMemberById,
  deleteMember,
  getMemberss,
} from "../controllers/memberController";

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Routes
router.post("/", upload.single("photo"), addMember);

router.put("/:id", upload.single("photo"), updateMember);
router.get("/", getMembers);
router.get("/get", getMemberss);

router.get("/:id", getMemberById);
router.delete("/:id", deleteMember);

export default router;
