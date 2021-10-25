import React from 'react'

import { Trans } from '@/utils/i18n'
import DotDivider from '@/widgets/DotDivider'
import { Wrapper, Item, DotWrapper } from './styles/panel'

const Panel = ({ options, active, onSelect }) => {
  return (
    <Wrapper>
      {options.map((thread) => (
        <Item key={thread} onClick={() => onSelect(thread)}>
          <div>{Trans(thread)}</div>
          <DotWrapper active={thread === active}>
            <DotDivider />
          </DotWrapper>
        </Item>
      ))}
    </Wrapper>
  )
}

export default React.memo(Panel)
