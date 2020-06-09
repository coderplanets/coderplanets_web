import React from 'react'

import { ICON_CMD } from '@/config'

import {
  ColumnWrapper,
  SelectLabel,
  LabelDivider,
  SelectIcon,
  SelectTitle,
  SelectItem,
} from './styles'

const VideoSourceFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLabel>
      <SelectIcon src={`${ICON_CMD}/player_play.svg`} />
      <SelectTitle>来源</SelectTitle>
    </SelectLabel>
    <LabelDivider />
    <SelectItem
      active={activeFilter.source === 'youtube'}
      onClick={() => onSelect({ source: 'youtube' })}
    >
      youtube
    </SelectItem>
    <SelectItem
      active={activeFilter.source === 'vimeo'}
      onClick={() => onSelect({ source: 'vimeo' })}
    >
      vimeo
    </SelectItem>
    <SelectItem
      active={activeFilter.source === 'bilibili'}
      onClick={() => onSelect({ source: 'bilibili' })}
    >
      B站
    </SelectItem>
    <SelectItem
      active={activeFilter.source === 'other'}
      onClick={() => onSelect({ videoSource: 'other' })}
    >
      其他网站
    </SelectItem>
  </ColumnWrapper>
)

export default React.memo(VideoSourceFilter)
