import Readme from "@/components/projetos/Readme"
import Cabecalho from "@/components/shared/Cabecalho"
import CarouselImagens from "@/components/shared/CarouselImagens"
import Container from "@/components/shared/Container"
import Tecnologias from "@/components/tecnologias/Tecnologias"
import { obterReadme } from "@/functions/obterReadme"
import { obterProjeto } from "@/functions/projetos"

export default async function Projeto(props: { params: Promise<{ id: string }> }) {
	const { id } = await props.params
	const projeto = await obterProjeto(id)
	if (!projeto) return null
	const readme = await obterReadme(projeto?.repositorio)

	return (
		<div className="bg-black">
			<Cabecalho />
			<Container className="py-7 flex flex-col gap-10 items-center">
				<h1 className="text-3xl font-bold self-start">Projeto {projeto?.nome}</h1>

				<CarouselImagens imagens={projeto?.imagens.slice(1)} />
				<Tecnologias valor={projeto.tecnologias} tamanhoMenor={true} />
				<Readme markdown={readme}/>
			</Container>
		</div>
	)
}
