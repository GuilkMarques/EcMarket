import { Router, Request, Response } from "express";
import { CnaesRepository } from "../../../../modules/model/repositories/CnaesRepository";
import { createcnaesController } from "../../../../modules/model/useCases/createCnaes";

const cnaesRoutes = Router();
const cnaesRepository = new CnaesRepository();

cnaesRoutes.post("/", (request: Request, response: Response) => {
  return createcnaesController.handle(request, response);
});
cnaesRoutes.get("/", (request: Request, response: Response) => {
  const all = cnaesRepository.list();
  return response.json(all);
});

export { cnaesRoutes };
