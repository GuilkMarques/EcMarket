import { Router, Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";
import { Cnaes } from "../model/Cnaes";
import { CnaesRepository } from "../../../../repositories/CnaesRepository";

const cnaesRoutes = Router();
const cnaesRepository = new CnaesRepository();

cnaesRoutes.post("/", (request: Request, response: Response) => {
  const { Codigo, Descricao } = request.body;
  cnaesRepository.create({ Codigo, Descricao });
  return response.status(201).send();
});
cnaesRoutes.get("/", (request: Request, response: Response) => {
  const all = cnaesRepository.list();
  return response.json(all);
});

export { cnaesRoutes };
