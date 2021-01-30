import { Router } from "express";

import * as service from "../service/secaoService";

import { trata } from "./util";

export const router = new Router();

router.get("/secoes", (req, res) => trata(req, res, service.list, req.query));

