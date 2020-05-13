/*
 *
 * PagiOptionSwitcher
 *
 */

import React from 'react'
import T from 'prop-types'

import { GALLERY } from '@/constant'
import { buildLog } from '@/utils'

import IconSwitcher from '../IconSwitcher'

import MainColumn from './MainColumn'
import MasonryColumn from './MasonryColumn'
import ThreeColumn from './ThreeColumn'
import TwoColumn from './TwoColumn'

import { Wrapper, Title } from '../styles/pagi_option_selector'

/* eslint-disable-next-line */
const log = buildLog('c:PagiOptionSwitcher:index')

const getLocalIcon = (item, activeKey) => {
  if (!item.localIcon) return ''
  switch (item.localIcon) {
    case GALLERY.MAIN_COLUMN: {
      return <MainColumn active={item.key === activeKey} />
    }
    case GALLERY.MASONRY_COLUMN: {
      return <MasonryColumn active={item.key === activeKey} />
    }
    case GALLERY.TWO_COLUMN: {
      return <TwoColumn active={item.key === activeKey} />
    }
    case GALLERY.THREE_COLUMN: {
      return <ThreeColumn active={item.key === activeKey} />
    }
    default:
      return <div>?</div>
  }
}

const PagiOptionSwitcher = ({ title, items, activeKey, onChange }) => {
  const mapedItems = items.map(item => {
    return {
      ...item,
      localIcon: getLocalIcon(item, activeKey),
    }
  })

  return (
    <Wrapper testid="PagiOptionSwitcher">
      <Title>{title}</Title>
      <IconSwitcher
        items={mapedItems}
        activeKey={activeKey}
        onChange={onChange}
      />
    </Wrapper>
  )
}

PagiOptionSwitcher.propTypes = {
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

PagiOptionSwitcher.defaultProps = {
  title: '',
}

export default React.memo(PagiOptionSwitcher)
