import React from 'react'

import { ICON_CMD } from '../../config'

import { Wrapper, PosterImage, PlayIcon } from './styles/play_window'

const PlayWindow = ({ poster }) => (
  <Wrapper>
    <PlayIcon src={`${ICON_CMD}/player_play.svg`} />
    <PosterImage src={poster} />
  </Wrapper>
)

export default PlayWindow
