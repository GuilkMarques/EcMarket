import { Cnaes } from "../../Cnaes";
import { ICnaesRepository } from "../../repositories/I-CnaesRepository";

class ListCnaesUseCase {
  constructor(private cnaesRepository: ICnaesRepository) {}
  execute(): Cnaes[] {
    const cnaes = this.cnaesRepository.list();
    return cnaes;
  }
}

export { ListCnaesUseCase };
