import styled from '@emotion/styled'

// export const SettingsList = styled.ul`
//   padding: 24px 0 0 24px;
// `
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ImageBox = styled.div`
  padding-top: 64px;
`

export const ConnectButtons = styled.div`
  padding-top: 64px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ConnectButton = styled.button`
  padding: 12px 16px;
  gap: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 180px;
  height: 32px;
  color: black;
  background: linear-gradient(157.2deg, #ffffff 34.76%, rgba(116, 116, 116, 0) 458.81%);

  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`
