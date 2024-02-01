import { CnaesRepository } from "../../repositories/implementations/CnaesRepository";
import { CreateCnaesUseCase } from "./CreateCnaesUseCase";
import { CreateCnaesController } from "./createCnaesController";

const cnaesRepository = CnaesRepository.getInstance();
const createCnaesUseCase = new CreateCnaesUseCase(cnaesRepository);
const createcnaesController = new CreateCnaesController(createCnaesUseCase);

export { createcnaesController };
