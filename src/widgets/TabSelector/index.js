/*
 *
 * TabSelector
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils/logger'
import {
  Wrapper,
  OptionsWrapper,
  Option,
  Icon,
  Title,
  HeaderDivider,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:TabSelector:index')

const TabSelector = ({ source, activeRaw, onChange }) => (
  <Wrapper>
    <OptionsWrapper>
      {source.map((opt) => (
        <Option
          key={opt.raw}
          active={activeRaw === opt.raw}
          onClick={() => onChange(opt)}
        >
          <Icon src={opt.icon} active={activeRaw === opt.raw} />
          <Title>
            {opt.title}
            {opt.count > 0 && <span>({opt.count})</span>}
          </Title>
        </Option>
      ))}
    </OptionsWrapper>
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
    }),
  ).isRequired,
}

TabSelector.defaultProps = {
  onChange: log,
}

export default React.memo(TabSelector)
