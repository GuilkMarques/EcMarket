import { CnaesRepository } from "../../repositories/implementations/CnaesRepository";
import { ListCnaesUseCase } from "./ListCnaesUseCase";
import { ListCnaesController } from "./ListCnaesController";

const cnaesRepository = CnaesRepository.getInstance();
const listCnaesUseCase = new ListCnaesUseCase(cnaesRepository);
const listCnaesController = new ListCnaesController(listCnaesUseCase);

export { listCnaesController };
