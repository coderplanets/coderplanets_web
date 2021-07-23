import { FC, memo, useEffect, useState } from 'react'

import { ICON } from '@/config'
import { IconButton } from '@/components/Buttons'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { AnimateOnChange } from 'react-animation'
import { CopyedHintIcon } from '../styles/copy_button'

type TProps = {
  value: string
}

const CopyButton: FC<TProps> = ({ value }) => {
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) {
      setTimeout(() => setDone(false), 2000)
    }
  }, [done])

  return (
    <AnimateOnChange
      // animationIn="bounceIn"
      animationIn="popIn"
      animationOut="bounceOut"
      durationOut={100}
    >
      {!done && (
        <CopyToClipboard text={value} onCopy={() => setDone(true)}>
          <IconButton path="article/clipboard.svg" mRight={5} />
        </CopyToClipboard>
      )}
      {done && <CopyedHintIcon src={`${ICON}/shape/checked.svg`} />}
    </AnimateOnChange>
  )
}

export default memo(CopyButton)
