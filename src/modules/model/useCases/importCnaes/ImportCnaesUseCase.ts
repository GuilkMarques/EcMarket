import csvParse, { Parser } from "csv-parse"
import fs from "fs"
import { ICnaesRepository } from "../../repositories/I-CnaesRepository"

interface IImportCnaes {
  Codigo: number
  Descricao: string
}

class ImportCnaesUseCase {
  constructor(private cnaesRepository: ICnaesRepository) {}

  async loadCnaes(file: Express.Multer.File): Promise<IImportCnaes[]> {
    const stream = fs.createReadStream(file.path)
    const cnaes: IImportCnaes[] = []

    const parseFile = new Parser({ delimiter: ";" })

    const parsePromise = new Promise<IImportCnaes[]>((resolve, reject) => {
      stream.pipe(parseFile)

      parseFile.on("data", async (line) => {
        const [Codigo, Descricao] = line
        cnaes.push({ Codigo, Descricao })
      })

      parseFile.on("end", () => {
        resolve(cnaes)
      })

      parseFile.on("error", (error) => {
        reject(error)
      })
    })

    await parsePromise
    return cnaes
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const cnaes = await this.loadCnaes(file)
    console.log(cnaes)
    cnaes.map(async (Cnaes) => {
      const { Codigo, Descricao } = Cnaes
      const existCnaes = this.cnaesRepository.findByNumber(Codigo)
      if (!existCnaes) {
        this.cnaesRepository.create({ Codigo, Descricao })
      }
    })
  }
}

export { ImportCnaesUseCase }
