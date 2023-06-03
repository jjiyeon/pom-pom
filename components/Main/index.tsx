import styled from '@emotion/styled'

const Main = () => {
  return (
    <StyledContainer>
      <StyledMainConnect>
        <StyledConnectButtonWrapper>
          <StyledConnectWalletButton>MetaMask</StyledConnectWalletButton>
          <StyledConnectWalletButton>WalletConnect</StyledConnectWalletButton>
          <StyledConnectWalletButton>WorldIcon</StyledConnectWalletButton>
        </StyledConnectButtonWrapper>
      </StyledMainConnect>
    </StyledContainer>
  )
}

export default Main

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`
const StyledMainConnect = styled.ul``
const StyledConnectButtonWrapper = styled.li``
const StyledConnectWalletButton = styled.button``
