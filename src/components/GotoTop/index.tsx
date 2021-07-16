/*
 *
 * GotoTop
 *
 */

import { FC, memo } from 'react'

import { scrollToHeader } from '@/utils'

import { IconButton } from '@/components/Buttons'
import { Wrapper } from './styles'

type TProps = {
  testid?: string
}

const GotoTop: FC<TProps> = ({ testid }) => {
  return (
    <Wrapper testid={testid} onClick={scrollToHeader}>
      <IconButton
        path="shape/air-balloon.svg"
        hint="回到顶部"
        size={20}
        mLeft={5}
      />
    </Wrapper>
  )
}

export default memo(GotoTop)
