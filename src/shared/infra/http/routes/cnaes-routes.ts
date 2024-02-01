import { Router, Request, Response } from "express";
import { createcnaesController } from "../../../../modules/model/useCases/createCnaes";
import { listCnaesController } from "../../../../modules/model/useCases/listCnaes";

const cnaesRoutes = Router();

cnaesRoutes.post("/", (request: Request, response: Response) => {
  return createcnaesController.handle(request, response);
});
cnaesRoutes.get("/", (request: Request, response: Response) => {
  return listCnaesController.handle(request, response);
});

export { cnaesRoutes };
