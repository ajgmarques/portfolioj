import { Tecnologia } from "@core"
import TecnologiasTrabalhadas from "./TecnologiasTrabalhadas"
import Experiencia from "./Experiencia"
import MiniCurriculo from "./MiniCurriculo"

export interface CurriculoProps {
	tecnologias: Tecnologia[]
}

export default function Curriculo(props: CurriculoProps) {
	return (
		<div className="flex flex-col lg:flex-row min-h-72 gap-4 w-full">
			<div className="flex-1">
				<MiniCurriculo />
			</div>
			<Experiencia />
			<TecnologiasTrabalhadas tecnologias={props.tecnologias} />
		</div>
	)
}
