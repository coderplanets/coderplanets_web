import { FC, memo, Fragment } from 'react'
import TimeAgo from 'timeago-react'

import type { TWorks } from '@/spec'

import ArticleMenu from '@/widgets/ArticleMenu'
import ArticleBaseStats from '@/widgets/ArticleBaseStats'
import DotDivider from '@/widgets/DotDivider'
import IconButton from '@/widgets/Buttons/IconButton'
import { Space } from '@/widgets/Common'
import Linker from '@/widgets/Linker'

import {
  Wrapper,
  WorksWrapper,
  Cover,
  Intro,
  Title,
  Desc,
  ContactWrapper,
  CommonInfo,
  PublishWrapper,
  PublishHint,
  PubDate,
  EditedHint,
  BaseWrapper,
} from '../styles/works_viewer/header'

type TProps = {
  article: TWorks
}

const Header: FC<TProps> = ({ article }) => {
  const { title, desc, homeLink, meta, author, socialInfo, insertedAt } =
    article

  return (
    <Wrapper>
      <WorksWrapper>
        <Cover src={author.avatar} />
        <Intro>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
          <ContactWrapper>
            <Linker src={homeLink} right={10} />
            {socialInfo.map((social) => (
              <a
                key={social.platform}
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                <IconButton path={`social/${social.platform}.svg`} size={13} />
              </a>
            ))}
          </ContactWrapper>
        </Intro>
      </WorksWrapper>
      <CommonInfo>
        <PublishWrapper>
          <PublishHint>发布于:</PublishHint>
          <PubDate>
            <TimeAgo datetime={insertedAt} locale="zh_CN" />
          </PubDate>
          {meta.isEdited && (
            <Fragment>
              <DotDivider space={8} />
              <EditedHint>修改过</EditedHint>
            </Fragment>
          )}
        </PublishWrapper>
        <BaseWrapper>
          <ArticleBaseStats article={article} container="drawer" />
          <Space right={5} />
          <ArticleMenu verticalIcon article={article} />
        </BaseWrapper>
      </CommonInfo>
    </Wrapper>
  )
}

export default memo(Header)
