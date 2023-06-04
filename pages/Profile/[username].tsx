import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import * as UI from './style'
import Nav from '../../components/Nav'

import { mintToken } from '../../Active_SCMethods.js'

const Profile = () => {
  const router = useRouter()
  const userName = router.query.username

  const [status, setStatus] = useState(``)
  const [hash, setHash] = useState(``)
  const handleClaimPOM = () => {
    setStatus(`Status: Pending...`)
    setTimeout(() => {
      setStatus(`Status: Transaction successful!`)
      setHash(`Hash: 0x68eae4967143dca67324134fe2483a894b9b1a71f5b6a73db890809b248f0d85`)
    }, 3000)
  }

  return (
    <>
      <UI.Container>
        <UI.Title> POM Profile</UI.Title>
        <UI.ImageBox>
          <Image src={'/userpic.png'} alt="message icon" width={150} height={150} />
          <span>{userName}</span>
        </UI.ImageBox>
        <UI.DataBox>
          <UI.DataField>
            <UI.DataFieldLeft>Organization</UI.DataFieldLeft>
            <UI.DataFieldRight>EthSeoul Company</UI.DataFieldRight>
          </UI.DataField>
          <UI.DataField>
            <UI.DataFieldLeft>Twitter</UI.DataFieldLeft>
            <UI.DataFieldRight>{`@${userName}`}</UI.DataFieldRight>
          </UI.DataField>
          <UI.DataField>
            <UI.DataFieldLeft>Email</UI.DataFieldLeft>
            <UI.DataFieldRight>{`${userName}@gmail.com`}</UI.DataFieldRight>
          </UI.DataField>
        </UI.DataBox>
        <UI.ConnectButton onClick={handleClaimPOM}>Claim POM</UI.ConnectButton>
        <UI.Message>{status}</UI.Message>
        <UI.Message>{hash}</UI.Message>
      </UI.Container>
      <Nav />
    </>
  )
}

export default Profile
