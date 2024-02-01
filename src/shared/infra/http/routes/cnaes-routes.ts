import { Router, Request, Response } from "express"
import multer from "multer"
import { createcnaesController } from "../../../../modules/model/useCases/createCnaes"
import { listCnaesController } from "../../../../modules/model/useCases/listCnaes"
import { importcnaesController } from "../../../../modules/model/useCases/importCnaes"

const cnaesRoutes = Router()

const upload = multer({
  dest: "./tmp",
})

cnaesRoutes.post("/", (request: Request, response: Response) => {
  return createcnaesController.handle(request, response)
})
cnaesRoutes.get("/", (request: Request, response: Response) => {
  return listCnaesController.handle(request, response)
})
cnaesRoutes.post("/import", upload.single("file"), (request: Request, response: Response) => {
  return importcnaesController.handle(request, response)
})

export { cnaesRoutes }
