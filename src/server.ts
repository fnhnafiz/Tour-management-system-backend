import { Server } from "http";

import mongoose from "mongoose";
import app from "./app";
import { envSetupVars } from "./app/config/env";
let server: Server;




const startServer = async () => {
  try {
    // console.log(envSetupVars.NODE_ENV)
    await mongoose.connect(
      envSetupVars.DB_URL
    );
    // eslint-disable-next-line no-console
    console.log("connected to db");
    server = app.listen(5000, () => {
      // eslint-disable-next-line no-console
      console.log("Server is listening to port 5000");
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to start server:", error);
  }
};
startServer();

process.on("unhandledRejection", () => {
  // eslint-disable-next-line no-console
  console.log("Unhandled Rejection detected.... Server shout down...");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// Promise.reject(new Error("I forgot to catch this promise"));
