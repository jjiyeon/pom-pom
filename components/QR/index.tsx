import React, { useEffect } from 'react'
import QRCode from 'react-qr-code'

import * as UI from './style'
import { useQRStore } from './useQRStore'

const QR = () => {
  const { code, setCode } = useQRStore((state) => ({ code: state.code, setCode: state.setCode }))

  return (
    <UI.QRContainer>
      <QRCode size={512} style={{ height: 'auto', maxWidth: '70%', width: '70%' }} value={'/'} viewBox={`0 0 512 512`} />
    </UI.QRContainer>
  )
}

export default QR
