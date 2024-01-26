import { CnaesRepository } from "../repositories/CnaesRepository";

interface IRequest {
  Codigo: number;
  Descricao: string;
}

class CreateCnaesService {
  constructor(private cnaesRepository: CnaesRepository) {}
  execute({ Codigo, Descricao }: IRequest) {
    const cnaesAlreadyExists = this.cnaesRepository.findByNumber(Codigo);
    if (cnaesAlreadyExists) {
      throw new Error("CNAES Already Exists");
    }
    this.cnaesRepository.create({ Codigo, Descricao });
  }
}

export { CreateCnaesService };
