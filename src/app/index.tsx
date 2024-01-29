import { appWithTranslation } from "next-i18next"
import { AppProps } from "next/app"
import React from "react"
import { I18nextProvider } from "react-i18next"

import "@/shared/styles/main.css"

// @ts-ignore
import i18n from "../../i18n"
import { withHocs } from "./lib/with-hocs"

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<I18nextProvider i18n={i18n}>
			<Component {...pageProps} />
		</I18nextProvider>
	)
}

export default withHocs(appWithTranslation(App))
