import type { NextPage } from 'next'
import Nav from '../../../components/Nav'

import ConnectButtons from '../../../components/ConnectButtons'

const MyPage: NextPage = () => {
  return (
    <>
      <ConnectButtons />
      <Nav />
    </>
  )
}

export default MyPage
