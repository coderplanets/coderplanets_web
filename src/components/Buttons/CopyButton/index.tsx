import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import IconButton from '../IconButton'
import { Wrapper } from '../styles/copy_button'

const AnimatedCopyButton = dynamic(() => import('./Animate'), {
  /* eslint-disable react/display-name */
  loading: () => {
    return <IconButton path="article/clipboard.svg" mRight={5} />
  },
  ssr: false,
})

type TProps = {
  value: string
}

const CopyButton: FC<TProps> = ({ value }) => {
  return (
    <Wrapper>
      <AnimatedCopyButton value={value} />
    </Wrapper>
  )
}

export default memo(CopyButton)
