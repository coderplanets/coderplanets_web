import { FC, memo } from 'react'

import type { TPost, TCommunity, TAccount } from '@/spec'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import { Wrapper } from '../../styles/comment_fist_layout/mobile_view'

type TProps = {
  article: TPost
  curCommunity: TCommunity | null
  onAuthorSelect?: (obj: TAccount) => void
}

const MobileView: FC<TProps> = ({ article, curCommunity, onAuthorSelect }) => {
  return (
    <Wrapper>
      <Header article={article} onAuthorSelect={onAuthorSelect} />
      <Body article={article} />
      <Footer article={article} curCommunity={curCommunity} />
    </Wrapper>
  )
}

export default memo(MobileView)
