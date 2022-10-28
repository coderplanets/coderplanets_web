import { FC, memo, useEffect, useState } from 'react'

import { AnimateOnChange } from '@groupher/react-animation'
import { CopyedHint, CopyIcon, CopyedText } from '../styles/copy_button'

const CopyButton: FC = () => {
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) setTimeout(() => setDone(false), 3000)
  }, [done])

  return (
    <AnimateOnChange animationIn="popIn" animationOut="fadeOut" durationOut={0}>
      {!done && <CopyIcon onClick={() => setDone(true)} />}
      {done && (
        <CopyedHint>
          <CopyedText>已复制</CopyedText>
        </CopyedHint>
      )}
    </AnimateOnChange>
  )
}

export default memo(CopyButton)
