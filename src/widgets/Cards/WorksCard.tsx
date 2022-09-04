/*
 *
 * WorksCard
 *
 */

import { Fragment, FC, memo } from 'react'
import TimeAgo from 'timeago-react'
import Link from 'next/link'
import { isMobile } from 'react-device-detect'

import type { TWorks } from '@/spec'
import { ICON, ICON_CMD } from '@/config'
import { ROUTE } from '@/constant'

import { cutRest } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
import { nilOrEmpty } from '@/utils/validator'

import DigestSentence from '@/widgets/DigestSentence'
import { SpaceGrow } from '@/widgets/Common'
import DotDivider from '@/widgets/DotDivider'
import IconText from '@/widgets/IconText'
import ImgFallback from '@/widgets/ImgFallback'
import Upvote from '@/widgets/Upvote'

import {
  Wrapper,
  IntroImg,
  IntroImgHolder,
  IntroWrapper,
  Header,
  Title,
  Name,
  PreviewName,
  OSSSign,
  FooterWrapper,
  BuildWithWrapper,
  TechIcon,
  PublishWrapper,
  Divider,
  GithubIcon,
} from './styles/works_card'

/* eslint-disable-next-line */
const log = buildLog('w:WorksCard:index')

type TProps = {
  testid?: string
  preview?: boolean
  onPreview?: (works: TWorks) => void
  item: TWorks
}

const WorksCard: FC<TProps> = ({
  testid = 'works-card',
  item,
  onPreview = log,
  preview = false,
  // item,
}) => {
  const descLimit = preview ? 20 : 35

  const { id, title, desc, upvotesCount, commentsCount } = item

  return (
    <Wrapper testid={testid} preview={preview}>
      {item.cover ? (
        <IntroImg
          src={item.cover}
          fallback={<ImgFallback type="work" top={isMobile ? -20 : 0} />}
        />
      ) : (
        <IntroImgHolder />
      )}

      <IntroWrapper>
        <Header>
          <div>
            <Title>
              {preview ? (
                <PreviewName as="div">{title || '--'}</PreviewName>
              ) : (
                <Link href={`/${ROUTE.W}/${id}`} passHref prefetch={false}>
                  <Name>{title || '--'}</Name>
                </Link>
              )}

              {item.isOSS && (
                <OSSSign>
                  <DotDivider space={8} />
                  <a href={item.ossAddr} target="_blank" rel="noreferrer">
                    <GithubIcon src={`${ICON_CMD}/works/github.svg`} />
                  </a>
                </OSSSign>
              )}
            </Title>
            <DigestSentence
              top={isMobile ? 2 : 5}
              bottom={isMobile ? 5 : 15}
              lineClamp={1}
              left={-2}
              onPreview={() => onPreview(item)}
              interactive={!preview}
            >
              {cutRest(desc, descLimit)}
            </DigestSentence>
          </div>

          <Upvote type="works-card" count={upvotesCount} />
        </Header>
        <FooterWrapper>
          {item.tag && (
            <IconText iconSrc={`${ICON_CMD}/works/topic.svg`} margin="1px">
              {item.tag.title}
            </IconText>
          )}
          {!nilOrEmpty(item.techstacks) && (
            <Fragment>
              {item.tag && <Divider />}
              <BuildWithWrapper>
                {item.techstacks.map((tech) => (
                  <TechIcon key={tech.raw} src={tech.logo} />
                ))}
              </BuildWithWrapper>
            </Fragment>
          )}

          {!preview && !isMobile && (
            <PublishWrapper>
              <IconText
                iconSrc={`${ICON}/edit/publish-rocket.svg`}
                margin="5px"
              >
                <TimeAgo datetime={item.insertedAt} locale="zh_CN" />
              </IconText>
            </PublishWrapper>
          )}
          <IconText iconSrc={`${ICON}/article/comment.svg`} margin="5px">
            {commentsCount}
          </IconText>

          <SpaceGrow />
          {/* {item.isOSS && <GithubIcon src={`${ICON_CMD}/works/github.svg`} />} */}
        </FooterWrapper>
      </IntroWrapper>
    </Wrapper>
  )
}

export default memo(WorksCard)
