import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

// 로그인 기능 : post | http://localhost:3000/auth/login | { "email": "1@naver.com", "password": "12345" }
router.post("/login", login);

export default router;