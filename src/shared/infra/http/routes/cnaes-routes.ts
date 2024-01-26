import { Router, Request, Response } from "express";
import { CnaesRepository } from "../../../../repositories/CnaesRepository";

const cnaesRoutes = Router();
const cnaesRepository = new CnaesRepository();

cnaesRoutes.post("/", (request: Request, response: Response) => {
  const { Codigo, Descricao } = request.body;
  const cnaesAlreadyExists = cnaesRepository.findByNumber(Codigo);
  if (cnaesAlreadyExists) {
    return response.status(400).json({ error: "CNAES Already Exists" });
  }
  cnaesRepository.create({ Codigo, Descricao });
  return response.status(201).send();
});
cnaesRoutes.get("/", (request: Request, response: Response) => {
  const all = cnaesRepository.list();
  return response.json(all);
});

export { cnaesRoutes };
