import { Response, Request } from "express";
import { CreateCnaesUseCase } from "./CreateCnaesUseCase";

class CreateCnaesController {
  constructor(private createCnaesUseCase: CreateCnaesUseCase) {}

  handle(request: Request, response: Response): Response {
    const { Codigo, Descricao } = request.body;
    this.createCnaesUseCase.execute({ Codigo, Descricao });
    return response.status(201).send();
  }
}

export { CreateCnaesController };
