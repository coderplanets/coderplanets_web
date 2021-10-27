/*
 *
 * TagList
 *
 */

import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'
import { buildLog } from '@/utils/logger'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import type { TCommunityView, TCommunitiesList, TType } from '../spec'
import { Wrapper } from '../styles/tag_setter'

/* eslint-disable-next-line */
const log = buildLog('c:TagList:index')

export type TProps = {
  testid?: string
  withSetter?: boolean
  type: TType
  view: TCommunityView
  communitiesList: TCommunitiesList
  onCommunitySelect?: (community: TCommunity, select: boolean) => void
}

const CommunitySetter: FC<TProps> = ({
  view,
  type,
  communitiesList,
  onCommunitySelect,
}) => {
  return (
    <Wrapper>
      <Header view={view} type={type} />
      <Body
        communitiesList={communitiesList}
        onCommunitySelect={onCommunitySelect}
      />
      <Footer type={type} />
    </Wrapper>
  )
}

export default memo(CommunitySetter)
