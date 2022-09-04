/*
 *
 * SourceSelector
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'
import CustomScroller from '@/widgets/CustomScroller'
import { Wrapper, Icon, Block, Title } from './styles/source_selector'

import { mockSource } from './mock'

/* eslint-disable-next-line */
const log = buildLog('w:SourceSelector:index')

const SourceSelector: FC = () => {
  const items = mockSource()

  return (
    <Wrapper>
      <CustomScroller
        direction="horizontal"
        innerHeight="70px"
        shadowSize="small"
      >
        {items.map((item) => (
          <Block key={item.id}>
            <Icon src={item.icon} />
            <Title>{item.title}</Title>
          </Block>
        ))}
      </CustomScroller>
    </Wrapper>
  )
}

export default memo(SourceSelector)
