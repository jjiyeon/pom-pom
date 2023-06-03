import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.span`
  width: 342px;
  height: 28px;
  padding-top: 32px;
  padding-left: 24px;
  font-family: 'Arial';
  font-style: italic;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  /* identical to box height */

  padding-bottom: 108px;

  color: #ffffff;
`

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;

  img {
    border-radius: 50%;
    height: 250px;
  }

  span {
    padding-top: 32px;
    text-transform: capitalize;
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    text-align: center;

    color: #ffffff;
  }

  padding-bottom: 72px;
`

export const DataBox = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  padding-bottom: 64px;
`

export const DataField = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: black;
  border-radius: 4px;
  padding: 16px;

  overflow: hidden;
`
export const DataFieldLeft = styled.span`
  padding: 4px 8px;
  border-radius: 4px 0 0 4px;
  color: #000;
  position: relative;
  z-index: 1;

  color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.04);
`
export const DataFieldRight = styled.span`
  padding: 4px 8px;
  border-radius: 0 4px 4px 0;
  border: 1px solid rgba(255, 255, 255, 0.04);

  color: rgba(255, 255, 255, 0.72);
  background: radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0) 100%), rgba(255, 255, 255, 0.01);
`

export const ConnectButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;

  width: 342px;
  height: 48px;

  background: linear-gradient(157.2deg, #ffffff 34.76%, rgba(116, 116, 116, 0) 458.81%);
  backdrop-filter: blur(6px);
  /* Note: backdrop-filter has minimal browser support */
  color: #020308;

  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 120% */

  text-align: center;

  color: #020308;

  border-radius: 8px;
`
