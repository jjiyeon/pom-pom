import React, { useState } from 'react'

import * as UI from '../style'
import Image from 'next/image'

const WalletConnect = () => {
  const [walletConnectAddress, setWalletConnect] = useState('')
  return (
    <UI.ConnectButton>
      <Image src={'/walletconnect.png'} alt="message icon" width={24} height={22} />
      WalletConnect
    </UI.ConnectButton>
  )
}

export default WalletConnect
