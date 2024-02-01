import { Response, Request } from "express";
import { ListCnaesUseCase } from "./ListCnaesUseCase";

class ListCnaesController {
  constructor(private listCnaesUseCase: ListCnaesUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listCnaesUseCase.execute();
    return response.json(all);
  }
}

export { ListCnaesController };
