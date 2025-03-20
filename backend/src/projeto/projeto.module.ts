import { Module } from "@nestjs/common"
import { ProjetoController } from "./projeto.controller"
import { DbModule } from "src/db/db.module"
import { ProjetoPrisma } from "./projeto.prisma"

@Module({
	controllers: [ProjetoController],
	providers: [ProjetoPrisma],
	imports: [DbModule],
})
export class ProjetoModule {}
