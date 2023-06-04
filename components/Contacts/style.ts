import styled from '@emotion/styled'

export const ContactContainer = styled.div`
  color: #fff;
`
export const Title = styled.h1`
  font-style: italic;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  padding: 20px 16px;
`
export const SearchContainer = styled.div``
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`
export const Search = styled.input`
  height: 44px;
  padding: 10px 50px;
  border: none;
`
export const IconWrapper = styled.div`
  position: absolute;
  top: 14px;
  left: 20px;
`
export const Sorting = styled.button`
  padding: 10px 16px 10px 50px;
  position: relative;
`
export const SortIcon = styled.div`
  position: absolute;
  top: 12px;
  left: 18px;
`

export const ContactsUsers = styled.div`
  padding-top: 20px;
`
export const UserList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const User = styled.li`
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 16px;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`
export const UserImage = styled.div`
  display: inline-block;
`
export const Name = styled.p`
  display: inline-block;
`
