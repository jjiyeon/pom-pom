import Link from 'next/link'
import * as UI from './style'
import Image from 'next/image'

const Nav = () => {
  return (
    <UI.NavContainer>
      <UI.NavButtonList>
        <UI.NavButtonWrapper>
          {/* <UI.NavButton>Contacts</UI.NavButton> */}
          <Image src={'/Icon.svg'} alt="message icon" width={20} height={20} />
          <Link href={'/Contacts'}>Contacts</Link>
        </UI.NavButtonWrapper>
        <UI.NavButtonWrapper>
          <Image src={'/Message.svg'} alt="message icon" width={20} height={20} />
          <Link href={'/Chat'}>Chat</Link>
        </UI.NavButtonWrapper>
        <UI.NavButtonWrapper>
          <Image src={'/ScanQR.svg'} alt="message icon" width={20} height={20} />
          <Link href={'/ScanQr'}>Scan QR</Link>
        </UI.NavButtonWrapper>
        <UI.NavButtonWrapper>
          <Image src={'/Message.svg'} alt="message icon" width={20} height={20} />
          <Link href={'/MyPage'}>Settings</Link>
        </UI.NavButtonWrapper>
      </UI.NavButtonList>
    </UI.NavContainer>
  )
}

export default Nav
