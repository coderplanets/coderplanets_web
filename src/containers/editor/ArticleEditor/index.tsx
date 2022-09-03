/*
 * ArticleEditor
 */

import { FC } from 'react'

import type { TMetric, TEditMode } from '@/spec'
import { METRIC } from '@/constant'

import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import ArchiveAlert from '@/widgets/ArchiveAlert'
import IllegalWarning from '@/widgets/IllegalWarning'

import NoticeBar from '@/widgets/NoticeBar'
import CommunityTagSetter from '@/containers/tool/CommunityTagSetter'
import RichEditor from '@/containers/editor/RichEditor'
import CommunityBadgeSelector from '@/widgets/CommunityBadgeSelector'

import TitleInput from './TitleInput'
import AddOn from './AddOn'
import Footer from './Footer'

import PublishRules from './PublishRules'

// import Settings from './Settings'

import type { TStore } from './store'
import { Wrapper, InnerWrapper, ContentWrapper } from './styles'
import { useInit, editOnChange, changeCommunity, onTagSelect } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleEditor')

type TProps = {
  testid?: string
  articleEditor?: TStore
  metric?: TMetric
}

const ArticleEditorContainer: FC<TProps> = ({
  testid = 'article-editor',
  articleEditor: store,
  metric = METRIC.ARTICLE_EDITOR,
}) => {
  useInit(store)
  const {
    isArchived,
    archivedAt,
    mode,
    communityData,
    submitState,
    tagsData,
    texts,
    thread,
    editData,
    viewingArticle,
    allowEdit,
  } = store

  const { meta } = viewingArticle
  const { title, body } = editData

  const initEditor = mode === 'publish' || body !== '{}'

  return (
    <Wrapper testid={testid}>
      <InnerWrapper metric={metric}>
        {communityData.id && (
          <CommunityTagSetter
            selectedCommunity={communityData}
            onCommunitySelect={changeCommunity}
            onTagSelect={onTagSelect}
          />
        )}
        <ContentWrapper>
          {!allowEdit && (
            <NoticeBar
              type="notice"
              content="只有作者可以编辑本内容。"
              left={25}
            />
          )}

          {isArchived && (
            <ArchiveAlert date={archivedAt} top={12} bottom={20} left={25} />
          )}
          <TitleInput title={title} placeholder={texts.holder.title} />
          {initEditor && (
            /* @ts-ignore */
            <RichEditor
              data={body}
              onChange={(v) => editOnChange(JSON.stringify(v), 'body')}
              addon={<AddOn thread={thread} editData={editData} />}
              placeholder={texts.holder.body}
            />
          )}
          <Footer
            thread={thread}
            mode={mode as TEditMode}
            tags={tagsData}
            community={communityData}
            editData={editData}
            submitState={submitState}
          />
        </ContentWrapper>
        <div>
          <CommunityBadgeSelector
            community={communityData}
            mode={mode as TEditMode}
          />

          {mode === 'update' && meta && !meta.isLegal && (
            <IllegalWarning
              illegalReason={meta.illegalReason}
              illegalWords={meta.illegalWords}
            />
          )}
          <PublishRules thread={thread} />
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}

export default bond(ArticleEditorContainer, 'articleEditor') as FC<TProps>
