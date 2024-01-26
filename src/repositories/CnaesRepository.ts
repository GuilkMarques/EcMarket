import { Cnaes } from "../shared/infra/http/model/Cnaes";

interface ICreateCnaesDTO {
  Codigo: number;
  Descricao: string;
}
class CnaesRepository {
  private supercnaes: Cnaes[];

  constructor() {
    this.supercnaes = [];
  }

  create({ Codigo, Descricao }: ICreateCnaesDTO): void {
    const novaCnae = new Cnaes();
    Object.assign(novaCnae, { Codigo, Descricao });
    this.supercnaes.push(novaCnae);
  }

  list(): Cnaes[] {
    return this.supercnaes;
  }
}

export { CnaesRepository };