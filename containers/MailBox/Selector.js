import React from 'react'
import shortid from 'shortid'

import {
  Wrapper,
  OptisonsWrapper,
  Option,
  Icon,
  Title,
  HeaderDivider,
} from './styles/selector'

const Selector = ({ source, activeRaw, onChange }) => (
  <Wrapper>
    <OptisonsWrapper>
      {source.map(opt => (
        <Option
          key={shortid.generate()}
          active={activeRaw === opt.raw}
          onClick={onChange.bind(this, opt)}
        >
          <Icon src={opt.icon} active={activeRaw === opt.raw} />
          <Title>{opt.title}</Title>
        </Option>
      ))}
    </OptisonsWrapper>
    <HeaderDivider />
  </Wrapper>
)

export default Selector
