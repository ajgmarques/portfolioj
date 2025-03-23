"use client"

import ConteudoMD from "@/components/shared/ConteudoMD"
import useChat from "@/hooks/useChat"
import Image from "next/image"
import { useState } from "react"

export default function Chat() {
	const { chatId, mensagens, pensando, adicionarMensagem, limparMensagens } = useChat()
	const [texto, setTexto] = useState("")

	return (
		<div>
			<h1>Chat</h1>
			<h2>Chat ID: {chatId}</h2>
			<button onClick={limparMensagens}>Limpar</button>

			<ul>
				{mensagens.map((mensagem) => (
					<li key={mensagem.id} className="flex flex-col gap-2">
						<div>{mensagem.autor}</div>
						<ConteudoMD markdown={mensagem.texto} />
					</li>
				))}
			</ul>

			{pensando && (
				<div className="p-2">
					<Image src={"/pensando.gif"} alt="Pensando gif" width={50} height={50} />
				</div>
			)}

			<input
				className="border border-zinc-600 rounded h-10 p-2"
				type="text"
				value={texto}
				onChange={(event) => {
					setTexto(event.target.value)
				}}
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				onKeyDown={(event: any) => {
					if (event.key === "Enter") {
						adicionarMensagem(texto)
						setTexto("")
					}
				}}
			/>
		</div>
	)
}
