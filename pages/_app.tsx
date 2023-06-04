import { Global } from '@emotion/react'
import '../styles/globals.scss'
import { AppProps } from 'next/app'
import { globalStyle } from '../styles/Global'
import Nav from '../components/Nav'
import styled from '@emotion/styled'
import Header from '../components/Header'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={globalStyle} />
      {/* <Header /> */}
      <Container>
        <Component {...pageProps} />
      </Container>
      <Nav />
    </>
  )
}

const Container = styled.div`
  position: relative;
  padding-bottom: 80px;
`
export default MyApp
