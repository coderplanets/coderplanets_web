import { FC, memo } from 'react'

import type { TCategory, TTag } from '@/spec'
import Sticky from '@/widgets/Sticky'
import { Br } from '@/widgets/Common'
import FiltersMenu from '@/widgets/FiltersMenu'
import { mockFilterMenuTags } from '@/utils/mock'

import { Wrapper, Holder } from './styles/sidebar'
import { TID } from '@/spec'

type TProps = {
  show: boolean
  onItemClick: (tag: TTag) => void
  activeid: TID
  items: TCategory[]
}

const Sidebar: FC<TProps> = ({ show, onItemClick, activeid, items }) => {
  return (
    <Wrapper show={show}>
      <Sticky offsetTop={60}>
        <FiltersMenu
          tags={mockFilterMenuTags()}
          // onSelect={onItemClick}
          activeid={activeid}
          itemBgHighlight={false}
          noFilter
          revert
        />
        <Br bottom={150} />
      </Sticky>
      {/* without Holder the Sticky will not work because the
      Sticky  Content's Height is too long */}
      <Holder />
    </Wrapper>
  )
}

export default memo(Sidebar)
