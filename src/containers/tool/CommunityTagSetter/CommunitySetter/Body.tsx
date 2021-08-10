import { FC, memo } from 'react'

// import type { TTag } from '@/spec'
import { mockCommunities } from '@/utils/mock'

import CustomScroller from '@/components/CustomScroller'

import type { TCommunityView } from '../spec'
import SearchBox from './SearchBox'
import CommonUsedCommunities from './CommonUsedCommunities'

import { Wrapper, InnerWrapper } from '../styles/tag_setter/body'

type TProps = {
  view: TCommunityView
}

const Body: FC<TProps> = ({ view }) => {
  const allCommunities = mockCommunities(5)

  return (
    <Wrapper>
      <InnerWrapper>
        <SearchBox />
        <CustomScroller
          direction="vertical"
          height="350px"
          showShadow={false}
          autoHide={false}
        >
          <CommonUsedCommunities view={view} communities={allCommunities} />
        </CustomScroller>
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(Body)
