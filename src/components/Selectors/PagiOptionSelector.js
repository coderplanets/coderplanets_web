/*
 *
 * PagiOptionSelector
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'

import IconSelector from './IconSelector'

import { Wrapper, Title } from './styles/pagi_option_selector'

/* eslint-disable-next-line */
const log = buildLog('c:PagiOptionSelector:index')

const PagiOptionSelector = ({ title, items, activeKey, onChange }) => {
  return (
    <Wrapper testid="PagiOptionSelector">
      <Title>{title}</Title>
      <IconSelector items={items} activeKey={activeKey} onChange={onChange} />
    </Wrapper>
  )
}

PagiOptionSelector.propTypes = {
  title: T.string,
  items: T.arrayOf(
    T.shape({
      iconSrc: T.string,
      key: T.string,
    })
  ).isRequired,
  activeKey: T.string.isRequired,
  onChange: T.func.isRequired,
}

PagiOptionSelector.defaultProps = {
  title: '',
}

export default React.memo(PagiOptionSelector)
