/*
 *
 * TabSelector
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'
import {
  Wrapper,
  OptisonsWrapper,
  Option,
  Icon,
  Title,
  HeaderDivider,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:TabSelector:index')

const TabSelector = ({ source, activeRaw, onChange }) => (
  <Wrapper>
    <OptisonsWrapper>
      {source.map(opt => (
        <Option
          key={opt.raw}
          active={activeRaw === opt.raw}
          onClick={onChange.bind(this, opt)}
        >
          <Icon src={opt.icon} active={activeRaw === opt.raw} />
          <Title>
            {opt.title}
            {opt.count > 0 && <span>({opt.count})</span>}
          </Title>
        </Option>
      ))}
    </OptisonsWrapper>
    <HeaderDivider />
  </Wrapper>
)

TabSelector.propTypes = {
  onChange: T.func,
  activeRaw: T.string.isRequired,
  source: T.arrayOf(
    T.shape({
      title: T.string.isRequired,
      icon: T.string.isRequired,
      raw: T.string.isRequired,
      count: T.number,
    })
  ).isRequired,
}

TabSelector.defaultProps = {
  onChange: log,
}

export default React.memo(TabSelector)
