import express from "express";
import cors from "cors";
import morgan from "morgan";

import apiRouter from "./routes/api";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", apiRouter);

export default app;
