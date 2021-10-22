import { FC, memo, useEffect, useState } from 'react'

import { ICON } from '@/config'
import IconButton from '@/widgets/Buttons/IconButton'

import { AnimateOnChange } from 'react-animation'
import { CopyedHintIcon } from '../styles/copy_button'

const CopyButton: FC = () => {
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
        <IconButton
          path="article/clipboard.svg"
          mRight={5}
          onClick={() => {
            setDone(true)
          }}
        />
      )}
      {done && <CopyedHintIcon src={`${ICON}/shape/checked.svg`} />}
    </AnimateOnChange>
  )
}

export default memo(CopyButton)
