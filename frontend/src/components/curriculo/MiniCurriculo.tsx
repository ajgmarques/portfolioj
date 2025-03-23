import Image from "next/image"

export default function MiniCurriculo() {
	return (
		<div className="flex flex-1 flex-col-reverse md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black rounded-2xl border border-zinc-800 px-6 pt-6 gap-6">
			<div className="relative min-w-64 h-80 xl:self-end">
				<Image src={"/foto-generic.png"} alt="Foto de perfil" fill />
			</div>
			<div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start ">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<span className="bg-gradient-to-r from-red-500 via-white to-white text-transparent bg-clip-text text-2xl font-bold">
						António Marques
					</span>
					<span>Dev</span>
				</div>
				<p className="text-sm md:text-left lg:text-center xl:text-left">
					Na educação, um currículo é amplamente definido como a totalidade das
					experiências dos alunos que ocorrem em o processo educacional. O termo
					geralmente se refere especificamente a uma sequência planejada de instrução ou a
					uma visão das experiências do aluno em termos dos objetivos instrucionais do
					educador ou da escola. Um currículo pode incorporar a interação planejada dos
					alunos com o conteúdo instrucional, materiais, recursos e processos para avaliar
					o alcance dos objetivos educacionais. Os currículos são divididos em várias
					categorias: os explícitos, os implícitos (incluindo os ocultos), os excluídos e
					os extracurriculares.
				</p>
			</div>
		</div>
	)
}
