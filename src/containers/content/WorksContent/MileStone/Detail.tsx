import { FC, memo } from 'react'

import { ASSETS_ENDPOINT } from '@/config'
import IconText from '@/widgets/IconText'

import {
  Wrapper,
  Main,
  VersionTag,
  PublishInfo,
  DateText,
  CoverImage,
} from '../styles/mile_stone/detail'

const Detail: FC = () => {
  return (
    <Wrapper>
      <Main>
        <VersionTag>v1.4.2</VersionTag>
        <PublishInfo>
          <IconText iconSrc={`${ASSETS_ENDPOINT}/works/market1.jpeg`} round>
            mydaerxym
          </IconText>
          <DateText>发布于 3天前</DateText>
        </PublishInfo>
      </Main>
      <CoverImage src={`${ASSETS_ENDPOINT}/works/market1.jpeg`} />
    </Wrapper>
  )
}

export default memo(Detail)
