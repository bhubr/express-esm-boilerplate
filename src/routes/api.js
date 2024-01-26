import express from "express";

const router = express.Router();

router.get("/sample", (req, res) => {
  res.json({ message: "Hello World" });
});

export default router;
