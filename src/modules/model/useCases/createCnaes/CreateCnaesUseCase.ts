import { ICnaesRepository } from "../../repositories/I-CnaesRepository"

interface IRequest {
  Codigo: number
  Descricao: string
}

class CreateCnaesUseCase {
  constructor(private cnaesRepository: ICnaesRepository) {}
  execute({ Codigo, Descricao }: IRequest): void {
    const cnaesAlreadyExists = this.cnaesRepository.findByNumber(Codigo)
    if (cnaesAlreadyExists) {
      throw new Error("CNAES Already Exists")
    }
    this.cnaesRepository.create({ Codigo, Descricao })
  }
}

export { CreateCnaesUseCase }
