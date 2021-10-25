/*
 *
 * IconSwitcher
 *
 */

import { FC, ReactNode, memo } from 'react'
import { findIndex, propEq } from 'ramda'

import { nilOrEmpty } from '@/utils/validator'
import { buildLog } from '@/utils/logger'
import Tooltip from '@/widgets/Tooltip'

import {
  Wrapper,
  AccessZone,
  Tabs,
  DescText,
  Icon,
  Label,
  Slider,
} from './styles/icon_selector'

/* eslint-disable-next-line */
const log = buildLog('c:IconSwitcher:index')

type TItem = {
  iconSrc?: string
  localIcon?: ReactNode
  key: string
  desc?: string
}

type TTabLabel = {
  item: TItem
  activeKey: string
  onChange: (item: TItem) => void
}

const TabLabel: React.FC<TTabLabel> = ({ item, activeKey, onChange }) => {
  if (!item.desc) {
    return (
      <Label onClick={() => onChange(item)}>
        {!nilOrEmpty(item.localIcon) && <>{item.localIcon}</>}
        {!nilOrEmpty(item.iconSrc) && (
          <Icon src={item.iconSrc} checked={activeKey === item.key} />
        )}
      </Label>
    )
  }

  return (
    <Label onClick={() => onChange(item)}>
      {!nilOrEmpty(item.localIcon) && <>{item.localIcon}</>}
      {!nilOrEmpty(item.iconSrc) && (
        <Icon src={item.iconSrc} checked={activeKey === item.key} />
      )}
    </Label>
  )
}

type TProps = {
  items: TItem[]
  activeKey: string
  onChange: (item: TItem) => void
}

const IconSwitcher: FC<TProps> = ({ items, activeKey, onChange }) => {
  const slideIndex = findIndex(propEq('key', activeKey), items)

  return (
    <Wrapper testid="selectors">
      <AccessZone />
      <Tabs>
        {items.map((item) => (
          <Tooltip
            key={item.key}
            content={<DescText>{item.desc}</DescText>}
            placement="top"
            delay={500}
            forceZIndex
            noPadding
          >
            <TabLabel item={item} activeKey={activeKey} onChange={onChange} />
          </Tooltip>
        ))}
        <Slider index={slideIndex} />
      </Tabs>
    </Wrapper>
  )
}

export default memo(IconSwitcher)
