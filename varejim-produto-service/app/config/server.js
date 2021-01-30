import express from "express";
import { json } from "body-parser";
import morgan from "morgan";
import cors from "cors";

import * as produtos from "../controller/produtoRoutes";
import * as secoes from "../controller/secaoRoutes";

export const app = express();

app.use(json());
app.use(morgan("dev"));
app.use(cors());
app.options("*", cors());

app.use(produtos.router);
app.use(secoes.router);

app.get("/status", (req, res) => res.send("ONLINE"));
