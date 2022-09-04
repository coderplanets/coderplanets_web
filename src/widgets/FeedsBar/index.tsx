/*
 *
 * FeedsBar
 *
 */

import { FC, memo } from 'react'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils/logger'

import { SpaceGrow } from '@/widgets/Common'
import SourceSelector from './SourceSelector'
import List from './List'

import { Wrapper, Header, FunctionIcon, Title } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:FeedsBar:index')

type TProps = {
  title: string
}

const FeedsBar: FC<TProps> = ({ title }) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        <SpaceGrow />
        <FunctionIcon src={`${ICON_CMD}/hot/info.svg`} />
      </Header>
      <SourceSelector />
      <List />
    </Wrapper>
  )
}

export default memo(FeedsBar)
