import React from 'react'
import TimeAgo from 'timeago-react'

import { ICON_ASSETS } from '../../config'

import { Space } from '../../components'
import {
  Wrapper,
  PosterWrapper,
  Poster,
  Duration,
  TitleLink,
  LinkIcon,
  ViewIcon,
  Main,
  TopHalf,
  Breif,
  Title,
  TitleTag,
  SecondHalf,
  BodyDigest,
  Extra,
  OriginalAuthorLink,
  TitleTagDot,
  BottomAuthorWrapper,
  ButtonAvatar,
  ButtonNickname,
} from './styles/item'

import { cutFrom } from '../../utils'
import * as logic from './logic'

const Item = ({ data, activeVideo, index }) => (
  <Wrapper current={data} active={activeVideo} index={index}>
    <PosterWrapper>
      <Poster src={data.author.avatar} alt="poster" />
      <Duration>{data.duration}</Duration>
    </PosterWrapper>
    <Main>
      <TopHalf>
        <Breif onClick={logic.onTitleSelect.bind(this, data)}>
          <Title>{data.title}</Title>
          <TitleLink>
            <LinkIcon src={`${ICON_ASSETS}/cmd/link.svg`} />
            <span style={{ marginLeft: 9 }}>youtube</span>
          </TitleLink>
          <TitleTag>
            <TitleTagDot />
            elixir
          </TitleTag>
        </Breif>
      </TopHalf>

      <SecondHalf>
        <Extra>
          <OriginalAuthorLink href={data.originalAuthorLink} target="_blank">
            {data.originalAuthor}
          </OriginalAuthorLink>{' '}
          <Space right="2px" />⁝<Space right="2px" />
          <TimeAgo datetime={data.insertedAt} locale="zh_CN" />
          <Space right="2px" />⁝<Space right="2px" />
          <ViewIcon src={`${ICON_ASSETS}/cmd/refer.svg`} />{' '}
          <Space right="2px" />
          {data.views}
        </Extra>
        <BodyDigest>{cutFrom(data.desc, 90)}</BodyDigest>
      </SecondHalf>
      <BottomAuthorWrapper>
        <ButtonAvatar src={data.author.avatar} />
        <ButtonNickname>{data.author.nickname}</ButtonNickname>
      </BottomAuthorWrapper>
    </Main>
  </Wrapper>
)

export default Item
