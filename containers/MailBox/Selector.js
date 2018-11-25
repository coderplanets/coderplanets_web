import React from 'react'

import { uid } from '../../utils'

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
          key={uid.gen()}
          active={activeRaw === opt.raw}
          onClick={onChange.bind(this, opt)}
        >
          <Icon src={opt.icon} active={activeRaw === opt.raw} />
          <Title>
            {opt.title}
            {opt.count > 0 ? <span>({opt.count})</span> : null}
          </Title>
        </Option>
      ))}
    </OptisonsWrapper>
    <HeaderDivider />
  </Wrapper>
)

export default Selector
