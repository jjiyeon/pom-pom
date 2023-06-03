import styled from '@emotion/styled'

export const NavContainer = styled.nav`
  width: 100%;
  height: 62px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 12px 12px 0px 0px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
export const NavButtonList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`
export const NavButtonWrapper = styled.li`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`
export const NavButton = styled.button``
