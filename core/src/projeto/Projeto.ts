import { Tipo } from "./Tipo"
import { Nivel } from "./Nivel"
import Tecnologia from "../tecnologia/Tecnologia"

export default interface Projeto {
	id: number
	nome: string
	descricao: string
	imagens: string[]
	tipo: Tipo
	nivel: Nivel
	destaque: boolean
	repositorio: string
	tecnologias: Tecnologia[]
}
