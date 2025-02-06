import { Router } from "express";
import { protectRoute } from "../Controller/AdminController.js";
import { getAllBooks, getBookById, getUserProfile, updateEmail, updateUser } from "../Controller/UserController.js";

const router = Router();

router.put('/update-user',protectRoute,updateUser);
router.put('/update-email',protectRoute,updateEmail);
router.get('/books/:bookId',protectRoute,getBookById);
router.get('/get-all-books',protectRoute,getAllBooks);
router.get('/get-user-data',protectRoute,getUserProfile);

export default router;