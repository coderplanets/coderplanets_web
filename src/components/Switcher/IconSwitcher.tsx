/*
 *
 * IconSwitcher
 *
 */

import React, { FC, ReactNode } from 'react'
import { findIndex, propEq } from 'ramda'

import { buildLog, nilOrEmpty } from '@/utils'
import Tooltip from '@/components/Tooltip'

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
    <Tooltip
      content={<DescText>{item.desc}</DescText>}
      placement="bottom"
      delay={500}
      noPadding
    >
      <Label onClick={() => onChange(item)}>
        {!nilOrEmpty(item.localIcon) && <>{item.localIcon}</>}
        {!nilOrEmpty(item.iconSrc) && (
          <Icon src={item.iconSrc} checked={activeKey === item.key} />
        )}
      </Label>
    </Tooltip>
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
          <TabLabel
            key={item.key}
            item={item}
            activeKey={activeKey}
            onChange={onChange}
          />
        ))}
        <Slider index={slideIndex} />
      </Tabs>
    </Wrapper>
  )
}

export default React.memo(IconSwitcher)
