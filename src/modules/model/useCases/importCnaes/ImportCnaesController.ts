import { Response, Request } from "express"
import { ImportCnaesUseCase } from "./ImportCnaesUseCase"

class ImportCnaesController {
  constructor(private importCnaesUseCase: ImportCnaesUseCase) {}
  handle(request: Request, response: Response): Response {
    const { file } = request
    this.importCnaesUseCase.execute(file)
    return response.send()
  }
}

export { ImportCnaesController }
