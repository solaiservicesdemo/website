import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { getAvailableSlots } from "./routes/available-slots";
import { bookDemo } from "./routes/book-demo";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Booking API routes
  app.get("/api/available-slots", getAvailableSlots);
  app.post("/api/book-demo", bookDemo);

  return app;
}
