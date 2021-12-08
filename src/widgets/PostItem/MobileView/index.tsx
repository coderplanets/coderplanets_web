import { FC, memo } from 'react'

import type { TPost, TCommunity, TAccount } from '@/spec'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

import { Wrapper } from '../styles/mobile_view'

type TProps = {
  entry: TPost
  curCommunity: TCommunity | null
  onAuthorSelect?: (obj: TAccount) => void
}

const MobileView: FC<TProps> = ({ entry, curCommunity, onAuthorSelect }) => {
  return (
    <Wrapper>
      <Header item={entry} onAuthorSelect={onAuthorSelect} />
      <Body item={entry} />
      <Footer item={entry} curCommunity={curCommunity} />
    </Wrapper>
  )
}

export default memo(MobileView)
