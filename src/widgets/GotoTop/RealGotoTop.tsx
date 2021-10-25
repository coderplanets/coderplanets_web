/*
 *
 * GotoTop
 *
 */

import { FC, memo } from 'react'

import { scrollToHeader, scrollDrawerToTop } from '@/utils/dom'

import IconButton from '@/widgets/Buttons/IconButton'
import type { TProps } from './index'
import { Wrapper } from './styles'

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
