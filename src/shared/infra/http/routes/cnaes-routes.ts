import { Router, request, response } from "express";
import { v4 as uuidV4 } from "uuid";

const cnaesRoutes = Router();

const cnaes = [];

cnaesRoutes.post("/", (request, response) => {
  const { descricao, codigo } = request.body;
  const economyCodes = { id: uuidV4(), descricao, codigo };
  cnaes.push(economyCodes);
  return response.status(201).send();
});

export { cnaesRoutes };
