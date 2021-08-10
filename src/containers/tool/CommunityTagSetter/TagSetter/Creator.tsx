import { FC, memo } from 'react'

import { Wrapper, InnerWrapper } from '../styles/tag_setter/creator'

const Creator: FC = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <div>Tag Title</div>
        <div>Tag Desc</div>
        <div>Tag Color</div>
        <div>Tag Index</div>
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(Creator)
