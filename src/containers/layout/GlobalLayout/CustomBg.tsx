import { FC, memo } from 'react'

import { Wrapper } from './styles/custom_bg'

const ComstomBg: FC = () => {
  const bgUrl = '/bg/CyBeRGaTa.jpeg'
  const backgroundColor = '#050139'

  // see https://github.com/styled-components/styled-components/issues/3315#issuecomment-885977691
  return (
    <Wrapper style={{ backgroundImage: `url(${bgUrl})`, backgroundColor }} />
  )
}

export default memo(ComstomBg)
