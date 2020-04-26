/*
 *
 * PagiOptionSelector
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'

import IconSelector from '../IconSelector'

import MainColumn from './MainColumn'
import MasonryColumn from './MasonryColumn'
import ThreeColumn from './ThreeColumn'
import TwoColumn from './TwoColumn'

import { Wrapper, Title } from '../styles/pagi_option_selector'

/* eslint-disable-next-line */
const log = buildLog('c:PagiOptionSelector:index')

const getLocalIcon = (item, activeKey) => {
  if (!item.localIcon) return ''
  switch (item.localIcon) {
    case 'main_column': {
      return <MainColumn active={item.key === activeKey} />
    }
    case 'masonry_column': {
      return <MasonryColumn active={item.key === activeKey} />
    }
    case 'two_column': {
      return <TwoColumn active={item.key === activeKey} />
    }
    case 'three_column': {
      return <ThreeColumn active={item.key === activeKey} />
    }
    default:
      return <div>?</div>
  }
}

const PagiOptionSelector = ({ title, items, activeKey, onChange }) => {
  const mapedItems = items.map(item => {
    return {
      ...item,
      localIcon: getLocalIcon(item, activeKey),
    }
  })

  return (
    <Wrapper testid="PagiOptionSelector">
      <Title>{title}</Title>
      <IconSelector
        items={mapedItems}
        activeKey={activeKey}
        onChange={onChange}
      />
    </Wrapper>
  )
}

PagiOptionSelector.propTypes = {
  title: T.string,
  items: T.arrayOf(
    T.shape({
      iconSrc: T.string,
      localIcon: T.string,
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
