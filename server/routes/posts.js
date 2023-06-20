import express from "express";

// Controllers
import {
  getPostsBySearch,
  getPosts,
  getPost,
  getPostsByLikes, // <-- make sure to import this
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "./../controllers/posts.js";


// Midleware
import auth from "./../middleware/auth.js";

// Router
const router = express.Router();

router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);
router.get("/likes", getPostsByLikes);


router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);


export default router;
