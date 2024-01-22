import { ColorSchemeScript } from "@mantine/core"
import { Head, Html, Main, NextScript } from "next/document"

import { HeadComponent } from "@/widgets/head"

export default function Document() {
	return (
		<Html lang="ru">
			<Head>
				<HeadComponent />
				<ColorSchemeScript />
			</Head>
			<body className="body page__body">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
