import { Cnaes } from "../../Cnaes";
import { ICreateCnaesDTO } from "../I-CnaesRepository";

class CnaesRepository {
  private supercnaes: Cnaes[];

  private static INSTANCE: CnaesRepository;

  private constructor() {
    this.supercnaes = [];
  }

  public static getInstance(): CnaesRepository {
    if (!CnaesRepository.INSTANCE) {
      CnaesRepository.INSTANCE = new CnaesRepository();
    }
    return CnaesRepository.INSTANCE;
  }

  create({ Codigo, Descricao }: ICreateCnaesDTO): void {
    const novaCnae = new Cnaes();
    Object.assign(novaCnae, { Codigo, Descricao });
    this.supercnaes.push(novaCnae);
  }

  list(): Cnaes[] {
    return this.supercnaes;
  }

  findByNumber(Codigo: number): Cnaes {
    const category = this.supercnaes.find(
      (category) => category.Codigo === Codigo
    );
    return category;
  }
}

export { CnaesRepository };
