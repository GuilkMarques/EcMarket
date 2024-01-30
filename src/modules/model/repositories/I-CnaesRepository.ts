import { Cnaes } from "../Cnaes";

interface ICreateCnaesDTO {
  Codigo: number;
  Descricao: string;
}
interface ICnaesRepository {
  findByNumber(Codigo: number): Cnaes;
  list(): Cnaes[];
  create({ Codigo, Descricao }: ICreateCnaesDTO): void;
}

export { ICnaesRepository, ICreateCnaesDTO };
