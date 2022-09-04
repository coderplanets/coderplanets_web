/*
 *
 * IconSwitcher
 *
 */

import { FC, memo } from 'react'
import { findIndex, propEq } from 'ramda'

import { SVG } from '@/constant'
import { buildLog } from '@/utils/logger'
import Tooltip from '@/widgets/Tooltip'

import {
  Wrapper,
  Tabs,
  DescText,
  Label,
  Slider,
  getLocalIcon,
} from './styles/icon_selector'

/* eslint-disable-next-line */
const log = buildLog('w:IconSwitcher:index')

type TItem = {
  icon?: string
  key: string
  desc?: string
}

type TProps = {
  items: TItem[]
  activeKey: string
  onChange?: (item: TItem) => void
}

const IconSwitcher: FC<TProps> = ({ items, activeKey, onChange = log }) => {
  const slideIndex = findIndex(propEq('key', activeKey), items)

  return (
    <Wrapper testid="selectors">
      {/* <AccessZone /> */}
      <Tabs>
        {items.map((item) => {
          const LocalIcon = getLocalIcon(item.icon || SVG.UPVOTE)

          return (
            <Tooltip
              key={item.key}
              content={<DescText>{item.desc}</DescText>}
              placement="top"
              delay={500}
              forceZIndex
              noPadding
            >
              <Label onClick={() => onChange(item)}>
                <LocalIcon $active={activeKey === item.key} />
              </Label>
            </Tooltip>
          )
        })}
        {slideIndex !== -1 && <Slider index={slideIndex} />}
      </Tabs>
    </Wrapper>
  )
}

export default memo(IconSwitcher)
