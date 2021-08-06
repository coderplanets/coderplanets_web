/*
 *
 * WorksCard
 *
 */

import { Fragment, FC, memo } from 'react'

import { ICON, ICON_CMD } from '@/config'
import { cutRest } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import type { TWorks } from '@/spec'

import DigestSentence from '@/components/DigestSentence'
import { SpaceGrow } from '@/components/Common'
import DotDivider from '@/components/DotDivider'
import IconText from '@/components/IconText'
import ImgFallback from '@/components/ImgFallback'
import Upvote from '@/components/Upvote'

import {
  Wrapper,
  IntroImg,
  IntroImgHolder,
  IntroWrapper,
  Header,
  Title,
  Name,
  OSSSign,
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
  preview?: boolean
  item: TWorks
}

const WorksCard: FC<TProps> = ({
  testid = 'works-card',
  item,
  preview = false,
  // item,
}) => {
  const descLimit = preview ? 20 : 30

  const { title, desc, upvoteCount, commentsCount } = item

  return (
    <Wrapper testid={testid} preview={preview}>
      {item.cover ? (
        <IntroImg src={item.cover} fallback={<ImgFallback type="work" />} />
      ) : (
        <IntroImgHolder />
      )}

      <IntroWrapper>
        <Header>
          <div>
            <Title>
              <Name>{title || '--'}</Name>

              {item.isOSS && (
                <OSSSign>
                  <DotDivider space={8} />
                  <a href={item.ossAddr} target="_blank" rel="noreferrer">
                    <GithubIcon src={`${ICON_CMD}/works/github.svg`} />
                  </a>
                </OSSSign>
              )}
            </Title>
            <DigestSentence top={5} bottom={15} onPreview={() => log}>
              {cutRest(desc, descLimit)}
            </DigestSentence>
          </div>

          <Upvote
            type="works-card"
            count={preview ? 66 : upvoteCount}
            viewerHasUpvoted={preview}
          />
        </Header>
        <FooterWrapper>
          {item.tag && (
            <IconText iconSrc={`${ICON_CMD}/works/topic.svg`} margin="1px">
              {item.tag.title}
            </IconText>
          )}
          {item.platform && (
            <Fragment>
              <DotDivider radius={4} space={8} /> {item.platform.title}
            </Fragment>
          )}
          {item.techStack && (
            <Fragment>
              <Divider />
              <BuildWithWrapper>
                {item.techStack.map((tech) => (
                  <TechIcon key={tech.raw} src={tech.icon} />
                ))}
              </BuildWithWrapper>
            </Fragment>
          )}

          {preview && <span>&nbsp;</span>}

          {!preview && (
            <Fragment>
              <Divider />
              <IconText
                iconSrc={`${ICON}/edit/publish-rocket.svg`}
                margin="5px"
              >
                {item.insertedAt}
              </IconText>
              <Divider />
            </Fragment>
          )}
          <IconText iconSrc={`${ICON}/article/comment.svg`} margin="5px">
            {preview ? 99 : commentsCount}
          </IconText>
          <SpaceGrow />
          {/* {item.isOSS && <GithubIcon src={`${ICON_CMD}/works/github.svg`} />} */}
        </FooterWrapper>
      </IntroWrapper>
    </Wrapper>
  )
}

export default memo(WorksCard)
