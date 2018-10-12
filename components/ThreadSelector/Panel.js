import React from 'react'

import DotDivider from '../DotDivider'
import { Wrapper, Item, DotWrapper } from './styles/panel'
import { uid, Trans } from '../../utils'

const Panel = ({ options, active, onSelect }) => (
  <Wrapper>
    {options.map(thread => (
      <Item key={uid.gen()} onClick={onSelect.bind(this, thread)}>
        <div>{Trans(thread)}</div>
        <DotWrapper active={thread === active}>
          <DotDivider />
        </DotWrapper>
      </Item>
    ))}
  </Wrapper>
)

export default Panel
