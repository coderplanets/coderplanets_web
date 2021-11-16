/*
 *
 * HaveADrink comments and likes
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import Upvote from '@/widgets/Upvote'
import DotDivider from '@/widgets/DotDivider'
import { mockUsers } from '@/utils/mock'

import { VIEW } from '../constant'
import { Wrapper, Row, CommentIcon, Count } from '../styles/header/reaction'
import { setView } from '../logic'
// import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const Reaction: FC = () => {
  return (
    <Wrapper>
      <Upvote
        count={3}
        avatarList={mockUsers(2)}
        alias="喜欢"
        onAction={() => setView(VIEW.EDIT)}
      />
      <DotDivider space={8} />
      <Row onClick={() => setView(VIEW.EDIT)}>
        <CommentIcon />
        <Count>34</Count>
      </Row>
    </Wrapper>
  )
}

export default memo(Reaction)
