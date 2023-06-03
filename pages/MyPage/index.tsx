import type { NextPage } from 'next'
import Nav from '../../components/Nav'
import Link from 'next/link'

import * as UI from './style'

const MyPage: NextPage = () => {
  return (
    <>
      <UI.SettingsList>
        <UI.SettingsListItem>
          <Link href={'MyPage/Connect'}>Connect Wallet</Link>
        </UI.SettingsListItem>
        <UI.SettingsListItem>Edit My POM Profile </UI.SettingsListItem>
        <UI.SettingsListItem>Logout</UI.SettingsListItem>
      </UI.SettingsList>
      <Nav />
    </>
  )
}

export default MyPage
