import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'

import MainColumn from './MainColumn'
import TwoColumn from './TwoColumn'
import ThreeColumn from './ThreeColumn'
import MasonryColumn from './MasonryColumn'

import {
  Wrapper,
  Hint,
  ContentWrapper,
} from '../../styles/column_style_switcher'

/* eslint-disable-next-line */
const log = buildLog('C:ColumnStyleSwitcher:index')

const ColumnStyleSwitcher = ({ activeColumn, onSelect }) => {
  return (
    <Wrapper>
      <Hint>显示样式</Hint>
      <ContentWrapper>
        <MainColumn active={activeColumn === 1} onSelect={onSelect} />
        <TwoColumn active={activeColumn === 2} onSelect={onSelect} />
        <ThreeColumn active={activeColumn === 3} onSelect={onSelect} />
        <MasonryColumn active={activeColumn === 4} onSelect={onSelect} />
      </ContentWrapper>
    </Wrapper>
  )
}

ColumnStyleSwitcher.propTypes = {
  activeColumn: T.oneOf([1, 2, 3]),
  onSelect: T.func,
}

ColumnStyleSwitcher.defaultProps = {
  activeColumn: 2,
  onSelect: log,
}

export default React.memo(ColumnStyleSwitcher)
