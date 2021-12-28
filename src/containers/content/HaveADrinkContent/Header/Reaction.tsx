/*
 *
 * HaveADrink comments and likes
 *
 */

import { FC, memo } from 'react'
import { isMobile } from 'react-device-detect'

import { buildLog } from '@/utils/logger'
import { getRandomInt } from '@/utils/helper'

import Upvote from '@/widgets/Upvote'
import DotDivider from '@/widgets/DotDivider'
import { mockUsers } from '@/utils/mock'

import { VIEW } from '../constant'

import { Wrapper, Row, CommentIcon, Count } from '../styles/header/reaction'
import { setView, getCategoryByTitle } from '../logic'
// import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

type TProps = {
  category: string
}

const Reaction: FC<TProps> = ({ category }) => {
  const targetCategory = getCategoryByTitle(category)

  return (
    <Wrapper>
      <Upvote
        count={3}
        avatarList={mockUsers(3)}
        alias={targetCategory.upvoteAlias}
        onAction={() => setView(VIEW.EDIT)}
      />
      {!isMobile && (
        <>
          <DotDivider space={8} />
          <Row onClick={() => setView(VIEW.EDIT)}>
            <CommentIcon />
            <Count>{getRandomInt(5, 99)}</Count>
          </Row>
        </>
      )}
    </Wrapper>
  )
}

export default memo(Reaction)
