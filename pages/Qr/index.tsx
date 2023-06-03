import type { NextPage } from 'next'
import Nav from '../../components/Nav'

import QR from '../../components/QR'

import * as UI from './style'

const PageQR: NextPage = () => {
  return (
    <>
      <UI.Title>My QR</UI.Title>
      <QR />
      <Nav />
    </>
  )
}

export default PageQR
