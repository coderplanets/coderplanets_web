/*
 *
 * WorksCard
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON, ICON_CMD } from '@/config'
import { buildLog, cutFrom, nilOrEmpty } from '@/utils'

import DigestSentence from '@/components/DigestSentence'
import { SpaceGrow } from '@/components/Common'
import DotDivider from '@/components/DotDivider'
import IconText from '@/components/IconText'
import ImgFallback from '@/components/ImgFallback'

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

const getSafeValue = (mode, value, defaultValue) => {
  return mode === 'preview' && nilOrEmpty(value) ? defaultValue : value
}

const WorksCard = ({
  withBg,
  testid,
  mode,
  item,
  defaultTitle,
  defaultDesc,
  defaultUpvote,
  defaultCommentsCount,
}) => {
  const descLimit = mode === 'default' ? 30 : 20

  const title = getSafeValue(mode, item.title, defaultTitle)
  const desc = getSafeValue(mode, item.desc, defaultDesc)

  const upvote = getSafeValue(mode, item.upvote, defaultUpvote)
  const commentsCount = getSafeValue(
    mode,
    item.commentsCount,
    defaultCommentsCount,
  )

  return (
    <Wrapper testid={testid} withBg={withBg}>
      {item.cover ? (
        <IntroImg src={item.cover} fallback={<ImgFallback type="work" />} />
      ) : (
        <IntroImgHolder />
      )}

      <IntroWrapper>
        <Header>
          <div>
            <Title>{title}</Title>
            <DigestSentence top={5} bottom={15}>
              {cutFrom(desc, descLimit)}
            </DigestSentence>
          </div>

          <IconText iconSrc={`${ICON}/article/heart-solid.svg`} size="large">
            {upvote}
          </IconText>
        </Header>
        <FooterWrapper>
          {item.tag && (
            <IconText iconSrc={`${ICON_CMD}/works/topic.svg`} margin="1px">
              {item.tag.title}
            </IconText>
          )}
          {item.platform && (
            <React.Fragment>
              <DotDivider radius={4} space={8} /> {item.platform.title}
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

          {mode === 'preview' && <span>&nbsp;</span>}

          {mode === 'default' && (
            <React.Fragment>
              <Divider />
              <IconText
                iconSrc={`${ICON}/edit/publish-rocket.svg`}
                margin="5px"
              >
                {item.insertedAt}
              </IconText>
              <Divider />
            </React.Fragment>
          )}
          <IconText iconSrc={`${ICON}/article/comment.svg`} margin="5px">
            {commentsCount}
          </IconText>
          <SpaceGrow />
          {item.isOSS && <GithubIcon src={`${ICON_CMD}/works/github.svg`} />}
        </FooterWrapper>
      </IntroWrapper>
    </Wrapper>
  )
}

WorksCard.propTypes = {
  testid: T.string,
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
    isOSS: T.bool,
    ossAddr: T.bool,
  }).isRequired,

  defaultTitle: T.string,
  defaultDesc: T.string,
  defaultUpvote: T.number,
  defaultCommentsCount: T.number,
}

WorksCard.defaultProps = {
  testid: 'works-card',
  withBg: false,
  mode: 'default',
  defaultTitle: '作品名称',
  defaultDesc: '作品简介',
  defaultUpvote: 99,
  defaultCommentsCount: 66,
  // item,
}

export default React.memo(WorksCard)
