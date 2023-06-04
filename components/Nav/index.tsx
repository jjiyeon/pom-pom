import Link from 'next/link'
import * as UI from './style'
import Image from 'next/image'

const Nav = () => {
  return (
    <UI.NavContainer>
      <UI.NavButtonList>
        <UI.NavButtonWrapper>
          {/* <UI.NavButton>Contacts</UI.NavButton> */}
          <Link href={'/Contacts'}>
            <Image src={'/Contacts.svg'} alt="message icon" width={20} height={20} />
            <p>Contacts</p>
          </Link>
        </UI.NavButtonWrapper>
        <UI.NavButtonWrapper>
          <Link href={'/Chat'}>
            <Image src={'/Message.svg'} alt="message icon" width={20} height={20} />
            <p>Chat</p>
          </Link>
        </UI.NavButtonWrapper>
        <UI.NavButtonWrapper>
          <Link href={'/Qr'}>
            <Image src={'/ScanQR.svg'} alt="message icon" width={20} height={20} />
            <p>QR</p>
          </Link>
        </UI.NavButtonWrapper>
        <UI.NavButtonWrapper>
          <Link href={'/MyPage'}>
            <Image src={'/Settings.svg'} alt="message icon" width={20} height={20} />
            <p>Settings</p>
          </Link>
        </UI.NavButtonWrapper>
      </UI.NavButtonList>
    </UI.NavContainer>
  )
}

export default Nav
