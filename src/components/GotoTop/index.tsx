/*
 *
 * GotoTop
 *
 */

import { FC, memo } from 'react'

import { scrollToHeader, scrollDrawerToTop } from '@/utils/dom'

import { IconButton } from '@/components/Buttons'
import { Wrapper } from './styles'

type TProps = {
  testid?: string
  type?: 'body' | 'drawer'
}

const GotoTop: FC<TProps> = ({ testid = 'goto-top', type = 'body' }) => {
  const handler = type === 'body' ? scrollToHeader : scrollDrawerToTop

  return (
    <Wrapper testid={testid} onClick={handler}>
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
