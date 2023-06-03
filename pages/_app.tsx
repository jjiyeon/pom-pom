import { Global } from '@emotion/react'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { globalStyle } from '../styles/Global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
