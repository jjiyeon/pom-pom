import styled from '@emotion/styled'
import Image from 'next/image'

const Header = () => {
  return (
    <StyledLogoContainer>
      <StyledLogo>
        <Image src={'/icon-logo.svg'} alt="pom logo icon" width={60} height={60} />
      </StyledLogo>
      <StyledPom>
        <Image src={'/icon-pom.svg'} alt="pom logo icon" width={65} height={46} />
      </StyledPom>
    </StyledLogoContainer>
  )
}

const StyledLogoContainer = styled.div``
const StyledLogo = styled.h1``
const StyledPom = styled.div``

export default Header
