import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Nav from '../Nav'
import ConnectButtons from '../ConnectButtons'
import { mintToken } from '../../Active_SCMethods.js'

const Main: NextPage = () => {
  // const test = async () => {
  //   console.log(await mintToken('0xb2d1BAa5fD0Ba77a6060D2D494a82EC025dA82EF', 0))
  // }
  // console.log(test)
  return (
    <>
      <ConnectButtons />
      <Nav />
    </>
  )
}

export default Main
