import React from 'react'

import { ICON_CMD } from '../../config'

import Labeler from '../Labeler'
import { Wrapper, Divider } from './styles/body_footer'

import { THREAD } from '../../utils'

const Content = ({ thread }) => {
  switch (thread) {
    case THREAD.JOB: {
      return (
        <Wrapper>
          <Labeler label="city" />
          <Divider src={`${ICON_CMD}/more.svg`} />
          <Labeler label="salary" />
        </Wrapper>
      )
    }
    default: {
      return (
        <Wrapper>
          <Labeler />
        </Wrapper>
      )
    }
  }
}

const BodyFooter = ({ thread }) => (
  <Wrapper>
    <Content thread={thread} />
  </Wrapper>
)

export default BodyFooter
