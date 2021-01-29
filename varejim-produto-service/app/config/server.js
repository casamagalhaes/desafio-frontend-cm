import express from "express";
import { json } from "body-parser";
import morgan from "morgan";
import cors from "cors";

import * as produtos from "../controller/produtoRoutes"

export const app = express();

app.use(json());
app.use(morgan("dev"));
app.use(cors());

app.use(produtos.router)

app.get("/status", (req, res) => res.send("ONLINE"));
