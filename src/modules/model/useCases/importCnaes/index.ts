import { ImportCnaesController } from "./ImportCnaesController"
import { ImportCnaesUseCase } from "./ImportCnaesUseCase"

const importCnaesUseCase = new ImportCnaesUseCase()
const importcnaesController = new ImportCnaesController(importCnaesUseCase)

export { importcnaesController }
