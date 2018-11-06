import React from 'react'

import { ICON_CMD } from '../../config'

import {
  ColumnWrapper,
  SelectLable,
  LabelDivider,
  SelectIcon,
  SelectTitle,
  SelectItem,
} from './styles'

const VideoSourceFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLable>
      <SelectIcon src={`${ICON_CMD}/player_play.svg`} />
      <SelectTitle>来源</SelectTitle>
    </SelectLable>
    <LabelDivider />
    <SelectItem
      active={activeFilter.videoSource === 'youtube'}
      onClick={onSelect.bind(this, { videoSource: 'youtube' })}
    >
      youtube
    </SelectItem>
    <SelectItem
      active={activeFilter.videoSource === 'vimeo'}
      onClick={onSelect.bind(this, { videoSource: 'vimeo' })}
    >
      vimeo
    </SelectItem>
    <SelectItem
      active={activeFilter.videoSource === 'bilibili'}
      onClick={onSelect.bind(this, { videoSource: 'bilibili' })}
    >
      B站
    </SelectItem>
    <SelectItem
      active={activeFilter.videoSource === 'other'}
      onClick={onSelect.bind(this, { videoSource: 'other' })}
    >
      其他网站
    </SelectItem>
  </ColumnWrapper>
)

export default VideoSourceFilter
