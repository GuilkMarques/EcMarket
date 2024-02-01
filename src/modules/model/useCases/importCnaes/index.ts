import { CnaesRepository } from "../../repositories/implementations/CnaesRepository"
import { ImportCnaesController } from "./ImportCnaesController"
import { ImportCnaesUseCase } from "./ImportCnaesUseCase"

const cnaesRepository = CnaesRepository.getInstance()
const importCnaesUseCase = new ImportCnaesUseCase(cnaesRepository)
const importcnaesController = new ImportCnaesController(importCnaesUseCase)

export { importcnaesController }
