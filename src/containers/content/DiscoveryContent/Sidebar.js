import React from 'react'

import Sticky from '@/components/Sticky'
import { Br } from '@/components/Common'
import FiltersMenu from '@/components/FiltersMenu'

import { Wrapper, Holder } from './styles/sidebar'

const Sidebar = ({ show, onItemClick, activeid, items }) => {
  return (
    <Wrapper show={show}>
      <Sticky offsetTop={60}>
        <FiltersMenu
          items={items}
          onItemClick={onItemClick}
          activeid={activeid}
          itemBgHighlight={false}
          noFilter
        />
        <Br bottom={150} />
      </Sticky>
      {/* without Holder the Sticky will not work because the
      Sticky  Content's Height is too long */}
      <Holder />
    </Wrapper>
  )
}

export default Sidebar
