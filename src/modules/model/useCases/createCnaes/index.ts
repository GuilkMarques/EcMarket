import { CnaesRepository } from "../../repositories/CnaesRepository";
import { CreateCnaesUseCase } from "./CreateCnaesUseCase";
import { CreateCnaesController } from "./createCnaesController";

const cnaesRepository = new CnaesRepository();
const createCnaesUseCase = new CreateCnaesUseCase(cnaesRepository);
const createcnaesController = new CreateCnaesController(createCnaesUseCase);

export { createcnaesController };
