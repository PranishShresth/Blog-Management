"use strict";

// dependencies
const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const dbConnect = require("./config/db");

//middlewares

app.use(logger("dev"));
app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

// routes
const publicRouter = require("./routes");
const adminRouter = require("./routes/admin");

app.use("/api", publicRouter);
app.use("/api/admin", adminRouter);

// Database connection
dbConnect();
