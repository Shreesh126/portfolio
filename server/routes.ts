import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Static backend, no routes needed since contact form is now mailto:
  const httpServer = createServer(app);
  return httpServer;
}
