import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// 처음에 들어갔을때 상품전체 뿌려주기 (였던것)
router.get("/", verifyToken, getFeedPosts);

// 특정유저 게시물 뿌려주기
router.get("/:userId/posts", verifyToken, getUserPosts);

// 좋아요 누른거
router.patch("/:id/like", verifyToken, likePost);

export default router;