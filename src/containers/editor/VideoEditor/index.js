/*
 *
 * VideoEditor
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@/utils'

import Labeler from '@/containers/Labeler'
import FormItem from '@/components/FormItem'
import ArticleEditFooter from '@/components/ArticleEditFooter'

import AlertMessage from './AlertMessage'
import CoverUploader from './CoverUploader'
import SourceOptions from './SourceOptions'

import { Wrapper, Title, FormWrapper } from './styles'
import { useInit, inputOnChange, cancelPublish, onPublish } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:VideoEditor')

const VideoEditorContainer = ({ videoEditor: store, attachment }) => {
  log('VideoEditorContainer come')
  useInit(store, attachment)

  const { editVideoData, publishing, ratKey, isEdit } = store

  return (
    <Wrapper>
      {!isEdit ? <Title>发布视频链接</Title> : <Title>更新视频链接</Title>}
      <AlertMessage />
      <CoverUploader
        thumbnil={editVideoData.thumbnil}
        poster={editVideoData.poster}
      />
      <FormWrapper>
        <FormItem
          label="标题:"
          raw="title"
          ratKey={ratKey}
          value={editVideoData.title}
          onChange={inputOnChange.bind(this, 'title')}
          placeholder="视频标题 #必填#"
        />
        <FormItem
          label="来源:"
          raw="source"
          ratKey={ratKey}
          value={editVideoData.source}
          onChange={inputOnChange.bind(this, 'source')}
          placeholder="YouTube #必填#"
          att={
            <SourceOptions
              active={editVideoData.source}
              sourceOnSelect={inputOnChange.bind(this, 'source')}
            />
          }
        />
        <FormItem
          label="视频链接:"
          raw="link"
          ratKey={ratKey}
          value={editVideoData.link}
          onChange={inputOnChange.bind(this, 'link')}
          placeholder="https://youtube/xxx #必填#"
        />
        <FormItem
          label="原作者:"
          raw="originalAuthor"
          ratKey={ratKey}
          value={editVideoData.originalAuthor}
          onChange={inputOnChange.bind(this, 'originalAuthor')}
          placeholder="原视频作者昵称 #必填#"
        />
        <FormItem
          label="作者链接:"
          raw="originalAuthorLink"
          ratKey={ratKey}
          value={editVideoData.originalAuthorLink}
          onChange={inputOnChange.bind(this, 'originalAuthorLink')}
          placeholder="视频网站的作者主页||作者社交账号链接 #必填#"
        />
        <FormItem
          label="时长:"
          raw="duration"
          ratKey={ratKey}
          value={editVideoData.duration}
          onChange={inputOnChange.bind(this, 'duration')}
          placeholder="mm:ss 或 hh:mm:ss #必填#"
        />
        {!isEdit && (
          <FormItem
            label="发布日期:"
            raw="publishAt"
            ratKey={ratKey}
            value={editVideoData.publishAt}
            onChange={inputOnChange.bind(this, 'publishAt')}
            placeholder="原视频发布日期, 格式 YYYY/MM/DD #必填#"
          />
        )}
        <FormItem
          label="描述:"
          raw="desc"
          ratKey={ratKey}
          value={editVideoData.desc}
          onChange={inputOnChange.bind(this, 'desc')}
          type="textarea"
          placeholder="视频描述信息 #必填#"
        />
        {!isEdit && (
          <FormItem
            label="标签:"
            value=""
            onChange={log}
            type="node"
            node={<Labeler />}
          />
        )}
      </FormWrapper>

      <ArticleEditFooter
        isEdit={isEdit}
        publishing={publishing}
        onCancel={cancelPublish}
        onPublish={onPublish}
      />
    </Wrapper>
  )
}

export default connectStore(VideoEditorContainer)
