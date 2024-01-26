import { Router, Request, Response } from "express";
import { CnaesRepository } from "../../../../repositories/CnaesRepository";
import { CreateCnaesService } from "../../../../services/CreateCnaesService";

const cnaesRoutes = Router();
const cnaesRepository = new CnaesRepository();

cnaesRoutes.post("/", (request: Request, response: Response) => {
  const { Codigo, Descricao } = request.body;
  const createCnaesService = new CreateCnaesService(cnaesRepository);
  createCnaesService.execute({ Codigo, Descricao });
  return response.status(201).send();
});
cnaesRoutes.get("/", (request: Request, response: Response) => {
  const all = cnaesRepository.list();
  return response.json(all);
});

export { cnaesRoutes };
