import express from "express";
import { SensorData } from "../models/SensorData.model.js";

const router = express.Router();

router.get("/latest", async (req, res) => {
  try {
    const latest = await SensorData.findOne().sort({ timestamp: -1 });
    res.json(latest);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

router.get("/history", async (req, res) => {
  const limit = parseInt(req.query.limit) || 50;
  const history = await SensorData.find().sort({ timestamp: -1 }).limit(limit);
  res.json(history.reverse()); // reverse to make oldest → newest
});

export default router;
