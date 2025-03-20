import { Controller, Get, Param } from "@nestjs/common"
import { Projeto } from "@core"
import { ProjetoPrisma } from "./projeto.prisma"

@Controller("projetos")
export class ProjetoController {
	constructor(private readonly repositorio: ProjetoPrisma) {}

	@Get()
	async obterTodos(): Promise<Projeto[]> {
		return this.repositorio.obterTodos()
	}

	@Get(":id")
	async obterPorId(@Param("id") id: string): Promise<Projeto | null> {
		return this.repositorio.obterPorId(Number(id))
	}
}
