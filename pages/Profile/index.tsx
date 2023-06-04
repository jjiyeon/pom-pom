import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import * as UI from './style'
import Nav from '../../components/Nav'

const Profile = () => {
  const router = useRouter()
  const userName = router.query.username

  return (
    <>
      <UI.Container>
        <UI.Title> My Profile</UI.Title>
        <UI.ImageBox>
          <Image src={'/userpic.png'} alt="message icon" width={150} height={150} />
          <span>My profile</span>
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
      </UI.Container>
      <Nav />
    </>
  )
}

export default Profile
