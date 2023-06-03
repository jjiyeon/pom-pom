import { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import * as UI from './style'
import Nav from '../../components/Nav'

const Profile: NextPage = () => {
  const router = useRouter()
  const userName = router.query.username
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
        <UI.ConnectButton>Claim POM</UI.ConnectButton>
      </UI.Container>
      <Nav />
    </>
  )
}

export default Profile
