import { Router } from "express";

import * as service from "../service/produtoService";

export const router = new Router();

const trata = async (req, res, fn, ...param) => {
  try {
    res.send(await fn(...param));
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};

router.get("/produtos", (req, res) => trata(req, res, service.list, req.query));
router.get("/produtos/:id", (req, res) =>
  trata(req, res, service.find, req.params.id)
);
router.post("/produtos", (req, res) =>
  trata(req, res, service.insert, req.body)
);
router.put("/produtos/:id", (req, res) =>
  trata(req, res, service.update, req.body, req.params.id)
);
router.delete("/produtos/:id", (req, res) =>
  trata(req, res, service.del, req.params.id)
);
