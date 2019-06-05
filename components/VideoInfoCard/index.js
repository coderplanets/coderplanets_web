/*
 *
 * VideoInfoCard
 *
 */

import React from 'react'
import T from 'prop-types'
import TimeAgo from 'timeago-react'

import { ICON_CMD } from '@config'

import { buildLog, cutFrom } from '@utils'
import DotDivider from '@components/DotDivider'
import VideoSourceInfo from '@components/VideoSourceInfo'

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
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:VideoInfoCard:index')

const VideoInfoCard = ({ data }) => {
  const {
    title,
    desc,
    originalAuthor,
    originalAuthorLink,
    publishAt,
    duration,
    source,
  } = data

  return (
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
            搬运于: <TimeAgo datetime={publishAt || ''} locale="zh_CN" />
          </PublishTime>
        </Footer>
      </BaseInfo>
      <OtherInfo>
        <Source>
          来源:
          <VideoSourceInfo value={source || ''} />
        </Source>
        <Duration>
          <DurationIcon src={`${ICON_CMD}/duration.svg`} />
          <DurationText>{duration}</DurationText>
        </Duration>
      </OtherInfo>
    </Wrapper>
  )
}

VideoInfoCard.propTypes = {
  data: T.shape({
    title: T.string,
    desc: T.string,
    originalAuthor: T.string,
    originalAuthorLink: T.string,
    publishAt: T.string,
    duration: T.string,
    source: T.string,
  }).isRequired,
}

VideoInfoCard.defaultProps = {}

export default React.memo(VideoInfoCard)
