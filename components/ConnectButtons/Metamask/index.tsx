import React, { useState } from 'react'
import { ethers } from 'ethers'
import { useRouter } from 'next/navigation'
import * as UI from '../style'
import Image from 'next/image'

const Metamask = () => {
  const [metaMaskAddress, setMetaMaskAddress] = useState('')
  const router = useRouter()
  // Requests access to the user's META MASK WALLET
  // https://metamask.io
  async function requestAccount() {
    // ❌ Check if Meta Mask Extension exists
    if (window.ethereum) {
      if (metaMaskAddress) {
        alert('Meta Mask already connected')
      }
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        setMetaMaskAddress(accounts[0])
        router.push('/Profile')
        console.log(`Metamask address: ${accounts[0]}`)
      } catch (error) {
        console.log(`Error: ${error}`)
      }
    } else {
      alert('Meta Mask not detected')
    }
  }

  // Create a provider to interact with a smart contract
  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()

      const provider = new ethers.BrowserProvider(window.ethereum)
    }
  }

  return (
    <UI.ConnectButton onClick={requestAccount}>
      <Image src={'/metamask.png'} alt="message icon" width={24} height={22} />
      Metamask
    </UI.ConnectButton>
  )
}

export default Metamask
