import React from 'react'

import * as UI from './style'

import Metamask from './Metamask'
import WorldCoin from './WorldCoin'
import WalletConnect from './WalletConnect'

const ConnectButtons = () => {
  return (
    <UI.ConnectButtons>
      <Metamask />
      <WorldCoin />
      <WalletConnect />
    </UI.ConnectButtons>
  )
}

export default ConnectButtons
