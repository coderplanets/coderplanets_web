/*
 *
 * TabSelector
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { makelogger } from '@utils'
import {
  Wrapper,
  OptisonsWrapper,
  Option,
  Icon,
  Title,
  HeaderDivider,
} from './styles'

/* eslint-disable-next-line */
const log = makelogger('c:TabSelector:index')

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
  onChange: PropTypes.func,
  activeRaw: PropTypes.string.isRequired,
  source: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      raw: PropTypes.string.isRequired,
      count: PropTypes.number,
    })
  ).isRequired,
}

TabSelector.defaultProps = {
  onChange: log,
}

export default React.memo(TabSelector)
