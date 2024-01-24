import { Router, Request, Response } from "express"
import { v4 as uuidV4 } from "uuid"
import { Cnaes } from "../model/Cnaes"

const cnaesRoutes = Router()

const supercnaes: Cnaes[] = []

cnaesRoutes.post("/", (request: Request, response: Response) => {
    try {
        const { Codigo, Descricao } = request.body
        const novaCnae = new Cnaes()
        Object.assign(Codigo, Descricao)
        //teste
        supercnaes.push(novaCnae)
        return response.status(201).json(novaCnae)
    } catch (error) {
        return response.status(500).json({ error: "Erro interno no servidor" })
    }
})

export { cnaesRoutes }
