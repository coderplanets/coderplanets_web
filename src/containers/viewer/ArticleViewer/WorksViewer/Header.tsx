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
  const { title, cover, desc, homeLink, meta, socialInfo, insertedAt } = article

  return (
    <Wrapper>
      <WorksWrapper>
        <Cover src={cover} />
        <Intro>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
          <ContactWrapper>
            <Linker src={homeLink} right={10} />
            {socialInfo.map((s) => (
              <a
                key={s.platform}
                href={s.platform === '邮箱' ? `mailto:${s.link}` : s.link}
                target="_blank"
                rel="noreferrer"
              >
                <IconButton
                  path={`social/${s.platform}.svg`}
                  size={13}
                  top={s.platform === '邮箱' ? 2 : 0}
                />
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
