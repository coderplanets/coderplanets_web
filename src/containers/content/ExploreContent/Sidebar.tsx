import { FC, memo } from 'react'

import type { TCategory, TTag } from '@/spec'

import Sticky from '@/widgets/Sticky'
import { Br } from '@/widgets/Common'
import NaviCatalog from '@/widgets/NaviCatalog'

import { Wrapper, Holder } from './styles/sidebar'
import { TID } from '@/spec'

type TProps = {
  show: boolean
  onItemClick: (tag: TTag) => void
  activeid: TID
  items: TCategory[]
}

const Sidebar: FC<TProps> = ({ show, onItemClick, activeid, items }) => {
  const categories = items.map((c) => ({ ...c, extra: [c.title] }))

  return (
    <Wrapper show={show}>
      <Sticky offsetTop={60}>
        <Br bottom={15} />
        <NaviCatalog title="类别筛选" tags={categories} withDivider />
      </Sticky>
      {/* without Holder the Sticky will not work because the
      Sticky  Content's Height is too long */}
      <Holder />
    </Wrapper>
  )
}

export default memo(Sidebar)
