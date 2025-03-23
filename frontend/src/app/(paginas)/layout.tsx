import BotaoChat from "@/components/chat/BotaoChat"
// import Cabecalho from "@/components/shared/Cabecalho"
import React from "react"

type LayoutProps = {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	return (
	<div>
		{/* <Cabecalho /> */}
		{children}
		<BotaoChat />
	</div>
	)
}
