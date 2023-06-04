import styled from '@emotion/styled'
import Image from 'next/image'

const Header = () => {
  return (
    <StyledLogoContainer>
      <StyledLogo>
        <Image src={'/pomlogo.png'} alt="pom logo icon" width={60} height={60} />
      </StyledLogo>
    </StyledLogoContainer>
  )
}

const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid gray;
`
const StyledLogo = styled.h1``

export default Header
