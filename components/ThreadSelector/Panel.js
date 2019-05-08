import React from 'react'

import { Trans } from '@utils'
import DotDivider from '@components/DotDivider'
import { Wrapper, Item, DotWrapper } from './styles/panel'

const Panel = ({ options, active, onSelect }) => (
  <Wrapper>
    {options.map(thread => (
      <Item key={thread} onClick={onSelect.bind(this, thread)}>
        <div>{Trans(thread)}</div>
        <DotWrapper active={thread === active}>
          <DotDivider />
        </DotWrapper>
      </Item>
    ))}
  </Wrapper>
)

export default Panel
