import { v4 as uuidV4 } from "uuid"

class Cnaes {
    id: string
    Codigo: number
    Descricao: string

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}

export { Cnaes }
