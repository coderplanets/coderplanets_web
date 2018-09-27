import React from 'react'
import TimeAgo from 'timeago-react'

import { ICON_CMD } from '../../config'
import { DotDivider, VideoSourceInfo } from '../../components'

import {
  Wrapper,
  BaseInfo,
  Title,
  Desc,
  Footer,
  OriginAuthor,
  OriginAuthorLink,
  PublishTime,
  OtherInfo,
  Duration,
  DurationIcon,
  DurationText,
  Source,
} from './styles/info_board'

import { cutFrom } from '../../utils'

const InfoBoard = ({
  data: {
    title,
    desc,
    originalAuthor,
    originalAuthorLink,
    publishAt,
    duration,
    source,
  },
}) => (
  <Wrapper>
    <BaseInfo>
      <Title>{cutFrom(title, 40)}</Title>
      <Desc>{desc}</Desc>
      <Footer>
        <OriginAuthor>
          原作者:{' '}
          <OriginAuthorLink
            href={originalAuthorLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            {originalAuthor}
          </OriginAuthorLink>
        </OriginAuthor>
        <DotDivider />
        <PublishTime>
          发布于: <TimeAgo datetime={publishAt} locale="zh_CN" />
        </PublishTime>
      </Footer>
    </BaseInfo>
    <OtherInfo>
      <Source>
        来源:
        <VideoSourceInfo value={source} />
      </Source>
      <Duration>
        <DurationIcon src={`${ICON_CMD}/duration.svg`} />
        <DurationText>{duration}</DurationText>
      </Duration>
    </OtherInfo>
  </Wrapper>
)

export default InfoBoard
