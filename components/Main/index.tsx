import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Nav from '../Nav'
import ConnectButtons from '../ConnectButtons'

const Main: NextPage = () => {
  return (
    <>
      <ConnectButtons />
      <Nav />
    </>
  )
}

export default Main
