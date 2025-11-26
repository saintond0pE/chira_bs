/**
 * Cloud Functions for Firebase - Express App Wrapper
 * This file exports your Express application as a Cloud Function
 */

import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import express from "express";
import cors from "cors";

// Create Express app
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// Routes
app.get("/", (req: express.Request, res: express.Response) => {
    logger.info("Root endpoint called", { structuredData: true });
    res.send("Hello World! Backend is running on Firebase Cloud Functions.");
});

app.get("/api/health", (req: express.Request, res: express.Response) => {
    res.json({
        status: "healthy",
        timestamp: new Date().toISOString(),
        service: "chira_be",
    });
});

// Export the Express app as a Cloud Function
export const api = onRequest(app);
