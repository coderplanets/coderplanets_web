/*
 *
 * GotoTop
 *
 */

import { FC, memo } from 'react'

import { scrollToHeader, scrollDrawerToTop } from '@/utils/dom'

import { SVG } from '@/constant'
import IconButton from '@/widgets/Buttons/IconButton'

import type { TProps } from './index'
import { Wrapper } from './styles'

const GotoTop: FC<TProps> = ({ testid = 'goto-top', type = 'body' }) => {
  const handler = type === 'body' ? scrollToHeader : scrollDrawerToTop

  return (
    <Wrapper testid={testid} onClick={handler}>
      <IconButton icon={SVG.TO_TOP} hint="回到顶部" size={16} left={5} />
    </Wrapper>
  )
}

export default memo(GotoTop)
