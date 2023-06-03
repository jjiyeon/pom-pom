import type { NextPage } from 'next'
import Nav from '../../components/Nav'

import QR from '../../components/QR'

import * as UI from './style'
import Link from 'next/link'

const PageQR: NextPage = () => {
  return (
    <>
      <UI.Container>
        <UI.Title>My QR</UI.Title>
        <QR />
        <UI.ShareButton>
          <Link href={'/Profile/vlad'}>Share your POM token</Link>
        </UI.ShareButton>
      </UI.Container>
    </>
  )
}

export default PageQR
