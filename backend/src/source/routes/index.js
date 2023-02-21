import { Router } from "express";

// Importing The Routes
import contact from "./contact.js";

// creating the original router, this work as /api
const router = Router();

// Enabling The Routes
router.use("/contact", contact);

export default router;
