import styled from '@emotion/styled'
import Image from 'next/image'
import * as UI from '../../components/Contacts/style'

const PageChat = () => {
  return (
    <StyledChatContainer>
      <StyledChatList>
        <StyledChat>
          <StyledUserImage>
            <Image src={`/contacts/1.png`} width={42} height={42} alt="dummy user" />
          </StyledUserImage>
          <STyledUserText>Hi~~~</STyledUserText>
        </StyledChat>
        <StyledChat>
          <STyledUserText>Hi~~~</STyledUserText>
          <StyledUserImage>
            <Image src={`/contacts/1.png`} width={42} height={42} alt="dummy user" />
          </StyledUserImage>
        </StyledChat>
        <StyledChat>
          <StyledUserImage>
            <Image src={`/contacts/1.png`} width={42} height={42} alt="dummy user" />
          </StyledUserImage>
          <STyledUserText>Hi~~~</STyledUserText>
        </StyledChat>
        <StyledChat>
          <STyledUserText>Hi~~~</STyledUserText>
          <StyledUserImage>
            <Image src={`/contacts/1.png`} width={42} height={42} alt="dummy user" />
          </StyledUserImage>
        </StyledChat>
      </StyledChatList>

      <StyledTextWrapper>
        <StyledTextInput>
          <Image src="/contacts/icn-search.svg" alt="search icon" width={16} height={16} />
        </StyledTextInput>
        <UI.Search placeholder="Text.." />
      </StyledTextWrapper>
    </StyledChatContainer>
  )
}

const StyledChatContainer = styled.div`
  width: 100%;
  height: calc(100vh - 62px);
`
const StyledChatList = styled.ul`
  padding: 20px;
`
const StyledChat = styled.li`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;

  :nth-child(2n) {
    justify-content: end;
  }
`
const StyledUserImage = styled.div``
const StyledTextWrapper = styled.div`
  position: absolute;
  bottom: 160px;
`
const STyledUserText = styled.div``

const StyledTextInput = styled.div`
  position: absolute;
  top: 12px;
  left: 20px;
`
export default PageChat
