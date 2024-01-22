import { appWithTranslation } from "next-i18next"
import { AppProps } from "next/app"
import React from "react"

import "@/shared/styles/main.css"

import { withHocs } from "./lib/with-hocs"

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />
}

export default withHocs(appWithTranslation(App))
