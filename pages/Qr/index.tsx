import type { NextPage } from 'next'
import Nav from '../../components/Nav'

import QR from '../../components/QR'

import * as UI from './style'

const PageQR: NextPage = () => {
  return (
    <>
      <UI.Container>
        <UI.Title>My QR</UI.Title>
        <QR />
        <UI.ShareButton>Share your POM token</UI.ShareButton>
      </UI.Container>
    </>
  )
}

export default PageQR
