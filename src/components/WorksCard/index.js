/*
 *
 * WorksCard
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON, ICON_CMD } from '@/config'
import { buildLog, cutFrom } from '@/utils'

import DigestSentence from '@/components/DigestSentence'
import { SpaceGrow } from '@/components/Common'
import DotDivider from '@/components/DotDivider'
import IconText from '@/components/IconText'
import ImgFallback from '@/components/ImgFallback'

import UpVote from './UpVote'

import {
  Wrapper,
  IntroImg,
  IntroImgHolder,
  IntroWrapper,
  Header,
  Title,
  FooterWrapper,
  BuildWithWrapper,
  TechIcon,
  Divider,
  GithubIcon,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:WorksCard:index')

const WorksCard = ({ withBg, testId, mode, item }) => {
  const descLimit = mode === 'default' ? 30 : 20

  return (
    <Wrapper testId={testId} withBg={withBg}>
      {item.cover ? (
        <IntroImg src={item.cover} fallback={<ImgFallback type="work" />} />
      ) : (
        <IntroImgHolder />
      )}

      <IntroWrapper>
        <Header>
          <div>
            <Title>{item.title}</Title>
            <DigestSentence top={5} bottom={15}>
              {cutFrom(item.desc, descLimit)}
            </DigestSentence>
          </div>
          <UpVote num={item.upvote} />
        </Header>
        <FooterWrapper>
          {item.tag && (
            <IconText
              iconSrc={`${ICON_CMD}/works/topic.svg`}
              margin="1px"
              size="tiny"
            >
              {item.tag.title}
            </IconText>
          )}
          {item.platform && (
            <React.Fragment>
              <DotDivider radius={4} space={10} /> {item.platform.title}
            </React.Fragment>
          )}
          {item.techStack && (
            <React.Fragment>
              <Divider />
              <BuildWithWrapper>
                {item.techStack.map((tech) => (
                  <TechIcon key={tech.raw} src={tech.icon} />
                ))}
              </BuildWithWrapper>
            </React.Fragment>
          )}

          <Divider />
          {mode === 'default' && (
            <React.Fragment>
              <IconText
                iconSrc={`${ICON}/edit/publish-rocket.svg`}
                size="tiny"
                margin="5px"
              >
                {item.insertedAt}
              </IconText>
              <Divider />
            </React.Fragment>
          )}
          <IconText
            iconSrc={`${ICON}/article/comment.svg`}
            size="tiny"
            margin="5px"
          >
            {item.commentsCount}
          </IconText>
          <SpaceGrow />
          {item.isOpenSource && (
            <GithubIcon src={`${ICON_CMD}/works/github.svg`} />
          )}
        </FooterWrapper>
      </IntroWrapper>
    </Wrapper>
  )
}

WorksCard.propTypes = {
  testId: T.string,
  withBg: T.bool,
  mode: T.oneOf(['default', 'preview']),
  item: T.shape({
    cover: T.string,
    title: T.string,
    desc: T.string,
    tag: T.shape({
      title: T.string,
    }),
    platform: T.shape({
      title: T.string,
    }),
    techStack: T.arrayOf(
      T.shape({
        icon: T.string,
      }),
    ),
    insertedAt: T.string,
    upvote: T.number,
    commentsCount: T.number,
    isOpenSource: T.bool,
  }).isRequired,
}

WorksCard.defaultProps = {
  testId: 'works-card',
  withBg: false,
  mode: 'default',
  // item,
}

export default React.memo(WorksCard)
