import { FC, memo, useEffect, useState } from 'react'

import { AnimateOnChange } from 'react-animation'
import {
  CopyedHint,
  CopyIcon,
  CopyedIcon,
  CopyedText,
} from '../styles/copy_button'

const CopyButton: FC = () => {
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) setTimeout(() => setDone(false), 2000)
  }, [done])

  return (
    <AnimateOnChange
      animationIn="popIn"
      animationOut="bounceOut"
      durationOut={50}
    >
      {!done && <CopyIcon onClick={() => setDone(true)} />}
      {done && (
        <CopyedHint>
          <CopyedIcon />
          <CopyedText>已复制</CopyedText>
        </CopyedHint>
      )}
    </AnimateOnChange>
  )
}

export default memo(CopyButton)
