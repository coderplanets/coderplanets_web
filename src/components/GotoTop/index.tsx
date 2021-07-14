/*
 *
 * GotoTop
 *
 */

import { FC, memo } from 'react'

import { ICON } from '@/config'
import { scrollToHeader } from '@/utils'

import Tooltip from '@/components/Tooltip'
import { Wrapper, Icon, Hint } from './styles'

type TProps = {
  testid?: string
}

const GotoTop: FC<TProps> = ({ testid }) => {
  return (
    <Wrapper testid={testid} onClick={scrollToHeader}>
      <Tooltip
        placement="top"
        content={<Hint>回到顶部</Hint>}
        noPadding
        delay={1200}
      >
        <Icon src={`${ICON}/shape/air-balloon.svg`} />
      </Tooltip>
    </Wrapper>
  )
}

export default memo(GotoTop)
