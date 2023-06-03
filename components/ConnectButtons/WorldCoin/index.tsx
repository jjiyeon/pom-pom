import React, { useState } from 'react'

import * as UI from '../style'
import Image from 'next/image'

const WorldCoin = () => {
  const [worldCoinAddress, setWorldCoinAddress] = useState('')
  return (
    <UI.ConnectButton>
      <Image src={'/worldcoin.png'} alt="message icon" width={24} height={22} />
      WorldCoin
    </UI.ConnectButton>
  )
}

export default WorldCoin
