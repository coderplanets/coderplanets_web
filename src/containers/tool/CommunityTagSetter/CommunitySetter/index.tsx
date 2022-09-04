/*
 *
 * TagList
 *
 */

import { FC, memo } from 'react'

import type { TCommunity, TCommunitySetterStyle } from '@/spec'
import { buildLog } from '@/utils/logger'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import type { TCommunityView, TCommunitiesList, TType, TTexts } from '../spec'
import { Wrapper } from '../styles/tag_setter'

/* eslint-disable-next-line */
const log = buildLog('w:TagList:index')

export type TProps = {
  type: TType
  communityStyle: TCommunitySetterStyle
  texts: TTexts
  view: TCommunityView
  communitiesList: TCommunitiesList
  onCommunitySelect?: (community: TCommunity, select: boolean) => void
}

const CommunitySetter: FC<TProps> = ({
  view,
  type,
  communityStyle,
  texts,
  communitiesList,
  onCommunitySelect,
}) => {
  return (
    <Wrapper>
      <Header view={view} texts={texts} />
      <Body
        texts={texts}
        communityStyle={communityStyle}
        communitiesList={communitiesList}
        onCommunitySelect={onCommunitySelect}
      />
      <Footer type={type} />
    </Wrapper>
  )
}

export default memo(CommunitySetter)
