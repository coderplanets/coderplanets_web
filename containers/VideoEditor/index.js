/*
 *
 * VideoEditor
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import { Alert } from 'antd'

import { ICON_CMD } from '../../config'

import Labeler from '../Labeler'
import { FormItem, Margin } from '../../components'
import {
  Wrapper,
  Title,
  FormWrapper,
  CoversWrapper,
  ThumbWrapper,
  PosterWrapper,
  UploaderLabel,
  UploaderIcon,
  UploaderText,
  AlertWrapper,
  WarnMsgWrapper,
  // TODO: extact a IconText
  WarnMsgItem,
  WarnMsgIcon,
  WarnMsgText,
} from './styles'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:VideoEditor')
/* eslint-enable no-unused-vars */

const WarnMessage = () => (
  <WarnMsgWrapper>
    <WarnMsgItem>
      <WarnMsgIcon src={`${ICON_CMD}/ban.svg`} />
      <WarnMsgText>
        仅限发布免费视频链接，如您发布的视频内容是需要付费才能观看的，请先获取授权。
      </WarnMsgText>
    </WarnMsgItem>
    <Margin top="7px" />
    <WarnMsgItem>
      <WarnMsgIcon src={`${ICON_CMD}/warn.svg`} />
      <WarnMsgText>
        如非质量很高，请不要发布国内视频(广告)网站,
        如优酷，爱奇艺，腾讯视频等站点的内容。推荐 youtube, vimeo 等。
      </WarnMsgText>
    </WarnMsgItem>
  </WarnMsgWrapper>
)

class VideoEditorContainer extends React.Component {
  componentWillMount() {
    const { videoEditor } = this.props
    logic.init(videoEditor)
  }

  render() {
    return (
      <Wrapper>
        <Title>发布视频</Title>
        <AlertWrapper>
          <Alert message={<WarnMessage />} type="warning" />
        </AlertWrapper>
        <CoversWrapper>
          <ThumbWrapper>
            <UploaderLabel>
              <UploaderIcon src={`${ICON_CMD}/image_upload.svg`} />
              <UploaderText>缩略图</UploaderText>
            </UploaderLabel>
          </ThumbWrapper>
          <PosterWrapper>
            <UploaderLabel>
              <UploaderIcon src={`${ICON_CMD}/image_upload.svg`} />
              <UploaderText>上传封面图</UploaderText>
            </UploaderLabel>
            <br />
            <UploaderLabel>
              <UploaderIcon src={`${ICON_CMD}/copy.svg`} />
              <UploaderText>使用缩略图</UploaderText>
            </UploaderLabel>
          </PosterWrapper>
        </CoversWrapper>
        <FormWrapper>
          <FormItem label="标题:" value="" onChange={debug} />
          <FormItem
            label="来源:"
            value=""
            onChange={debug}
            placeholder="youtube"
          />
          <FormItem
            label="视频链接:"
            value=""
            onChange={debug}
            placeholder="https://youtube/xxx"
          />
          <FormItem label="作者:" value="" onChange={debug} />
          <FormItem
            label="作者链接:"
            value=""
            onChange={debug}
            placeholder="视频网站的作者主页 或 作者其他社交账号"
          />
          <FormItem
            label="时长:"
            value=""
            onChange={debug}
            placeholder="mm:ss 或 hh:mm:ss"
          />
          <FormItem
            label="创作时间:"
            value=""
            onChange={debug}
            placeholder="原视频发布日期, 格式 YYYY-MM-DD"
          />
          <FormItem label="描述:" value="" onChange={debug} type="textarea" />
          <FormItem
            label="标签:"
            value=""
            onChange={debug}
            type="node"
            node={<Labeler label="编辑" />}
          />
        </FormWrapper>
      </Wrapper>
    )
  }
}

export default inject(storePlug('videoEditor'))(observer(VideoEditorContainer))
