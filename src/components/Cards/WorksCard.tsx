/*
 *
 * WorksCard
 *
 */

import React, { FC } from 'react'

import { ICON, ICON_CMD } from '@/config'
import { buildLog, cutRest } from '@/utils'

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
} from './styles/works_card'

/* eslint-disable-next-line */
const log = buildLog('c:WorksCard:index')

type TProps = {
  testid?: string
  withBg?: boolean
  mode?: 'default' | 'preview'
  item: {
    cover: string
    title: string
    desc: string
    tag: {
      title: string
    }
    platform: {
      title: string
    }
    techStack: {
      icon: string
      raw: string
    }[]
    insertedAt: string
    upvote: number
    commentsCount: number
    isOSS: boolean
    ossAddr?: boolean
  }
}

const WorksCard: FC<TProps> = ({
  testid = 'works-card',
  item,
  withBg = false,
  mode = 'default',
  // item,
}) => {
  const descLimit = mode === 'default' ? 30 : 20

  const { title, desc, upvote, commentsCount } = item

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
            <DigestSentence top={5} bottom={15} onPreview={() => log}>
              {cutRest(desc, descLimit)}
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

export default React.memo(WorksCard)
