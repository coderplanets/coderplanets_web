import React from 'react'

import { ICON_CMD } from '../../config'

import {
  ColumnWrapper,
  SelectLable,
  SelectIcon,
  SelectTitle,
  SelectItem,
} from './styles'

import { FILTER } from '../../utils'

const VideoSourceFilter = ({ onSelect }) => (
  <ColumnWrapper>
    <SelectLable>
      <SelectIcon src={`${ICON_CMD}/player_play.svg`} />
      <SelectTitle>来源</SelectTitle>
    </SelectLable>
    <SelectItem
      active={false}
      onClick={onSelect.bind(this, { wordLength: FILTER.MOST_WORDS })}
    >
      youtube
    </SelectItem>
    <SelectItem
      active={false}
      onClick={onSelect.bind(this, { wordLength: FILTER.LEAST_WORDS })}
    >
      vimeo
    </SelectItem>
    <SelectItem
      active={false}
      onClick={onSelect.bind(this, { wordLength: FILTER.LEAST_WORDS })}
    >
      B 站
    </SelectItem>
    <SelectItem
      active={false}
      onClick={onSelect.bind(this, { wordLength: FILTER.LEAST_WORDS })}
    >
      其他网站
    </SelectItem>
  </ColumnWrapper>
)

export default VideoSourceFilter
