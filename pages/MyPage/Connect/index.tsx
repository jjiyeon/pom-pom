import type { NextPage } from 'next'
import Header from '../../../components/Header'
import Nav from '../../../components/Nav'
import Image from 'next/image'

import * as UI from './style'

const MyPage: NextPage = () => {
  return (
    <>
      <Header />
      <UI.ConnectButtons>
        <UI.ConnectButton>
          <Image src={'/metamask.png'} alt="message icon" width={24} height={22} />
          Metamask
        </UI.ConnectButton>
        <UI.ConnectButton>
          <Image src={'/worldcoin.png'} alt="message icon" width={24} height={20} />
          Worldcoin
        </UI.ConnectButton>
        <UI.ConnectButton>
          <Image src={'/walletconnect.png'} alt="message icon" width={20} height={20} />
          Wallet Connect
        </UI.ConnectButton>
      </UI.ConnectButtons>
      <Nav />
    </>
  )
}

export default MyPage
