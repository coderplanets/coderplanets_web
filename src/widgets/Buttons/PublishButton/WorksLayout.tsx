/*
 *
 * PublishButton
 *
 */

import { memo, FC } from 'react'

import { buildLog } from '@/utils/logger'

// import Button from './Button'
import {
  Wrapper,
  Title,
  RocketIcon,
} from '../styles/publish_button/works_layout'

/* eslint-disable-next-line */
const log = buildLog('w:PublishButton:index')

type TProps = {
  text: string
}

const WorksLayout: FC<TProps> = ({ text }) => {
  return (
    <Wrapper>
      <Title>{text}</Title>
      <RocketIcon />
    </Wrapper>
  )
}

export default memo(WorksLayout)
