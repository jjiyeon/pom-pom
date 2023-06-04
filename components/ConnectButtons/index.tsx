import React from 'react'

import * as UI from './style'

import Image from 'next/image'

import Metamask from './Metamask'
import WorldCoin from './WorldCoin'
import WalletConnect from './WalletConnect'

const ConnectButtons = () => {
  return (
    <>
      <UI.Container>
        <UI.ImageBox>
          <Image src={'/logo.png'} alt="message icon" width={150} height={100} />
        </UI.ImageBox>
        <UI.ConnectButtons>
          <Metamask />
          <WalletConnect />
        </UI.ConnectButtons>
      </UI.Container>
    </>
  )
}

export default ConnectButtons
