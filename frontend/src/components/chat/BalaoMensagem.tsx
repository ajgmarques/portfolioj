import Mensagem from "@/model/Mensagem"
import ConteudoMD from "../shared/ConteudoMD"
import Image from "next/image"
import { IconBrandOpenai } from "@tabler/icons-react"

export interface BalaoMensagemProps {
	mensagem: Mensagem
	omitirAutor?: boolean
}

export default function BalaoMensagem(props: BalaoMensagemProps) {
	return props.mensagem.lado === "esquerdo" ? (
		<BalaoEsquerdo {...props} />
	) : (
		<BalaoDireito {...props} />
	)
}

function BalaoEsquerdo(props: BalaoMensagemProps) {
	return (
		<div className="flex items-center gap-2">
			{/* <Image src={"/chat.svg"} alt="Assistente icone" width={20} height={20}/> */}

			<IconBrandOpenai size={35} className="text-black/60" />

			<div className={`flex flex-col ${props.omitirAutor && "pl-1"}`}>
				{!props.omitirAutor && (
					<span className="text-xs text-zinc-600">{props.mensagem.autor}</span>
				)}
				<div className="bg-black text-white px-7 py-4 sm:w-80 rounded-r-3xl rounded-bl-4xl">
					<ConteudoMD markdown={props.mensagem.texto} />
				</div>
			</div>
		</div>
	)
}

function BalaoDireito(props: BalaoMensagemProps) {
	return (
		<div className="flex flex-col items-end">
			{!props.omitirAutor && (
				<span className="text-xs text-zinc-600">{props.mensagem.autor}</span>
			)}
			<div className="bg-red-700 text-white px-7 py-4 sm:w-80 rounded-l-3xl rounded-br-4xl">
				<ConteudoMD markdown={props.mensagem.texto} />
			</div>
		</div>
	)
}
