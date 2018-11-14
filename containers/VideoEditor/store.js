/*
 * VideoEditor store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { Video } from '../../stores/SharedModel'
import {
  markStates,
  makeDebugger,
  stripMobx,
  changeset,
  flashState,
} from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:VideoEditor')
/* eslint-enable no-unused-vars */

/* thumbnil: */
/* 'https://coderplanets.oss-cn-beijing.aliyuncs.com/posts/2018_9/22/javascript--post--113--mydearxym-112--%E4%BF%84%E7%BD%97%E6%96%AF.jpg', */

const VideoEditor = t
  .model('VideoEditor', {
    editVideo: t.optional(Video, { source: 'youtube' }),
    isEditMode: t.optional(t.boolean, false),
    publishing: t.optional(t.boolean, false),

    /* for StatusBox */
    success: t.optional(t.boolean, false),
    error: t.optional(t.boolean, false),
    warn: t.optional(t.boolean, false),
    statusMsg: t.optional(t.string, ''),
    ratKey: t.optional(t.string, ''),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get editVideoData() {
      return {
        ...stripMobx(self.editVideo),
      }
    },
  }))
  .actions(self => ({
    changesetErr(options) {
      self.root.changesetErr(options)
    },
    updateEditing(sobj) {
      const editVideo = R.merge(self.editVideoData, { ...sobj })
      self.markState({ editVideo })
    },
    validator(type) {
      switch (type) {
        case 'publish': {
          const opt = { msg: '不能为空 (请填写 #必填# 字段)' }
          const result = changeset(self.editVideoData)
            .exsit({ thumbnil: '缩略图' }, self.changesetErr)
            .exsit({ thumbnil: '视频封面' }, self.changesetErr)
            .exsit({ title: '视频标题' }, self.changesetErr, opt)
            .min({ title: '视频标题' }, 5, self.changesetErr, opt)
            .exsit({ source: '视频来源' }, self.changesetErr, opt)
            .exsit({ link: '视频链接' }, self.changesetErr, opt)
            .startsWith({ link: '视频链接' }, 'https://', self.changesetErr)
            .exsit({ originalAuthor: '原作者昵称' }, self.changesetErr, opt)
            .exsit({ originalAuthorLink: '原作者链接' }, self.changesetErr, opt)
            .startsWith(
              { originalAuthorLink: '原作者链接' },
              'https://',
              self.changesetErr
            )
            .exsit({ desc: '视频描述' }, self.changesetErr, opt)
            .min({ desc: '视频描述' }, 10, self.changesetErr, opt)
            .exsit({ duration: '时长' }, self.changesetErr, opt)
            .durationFmt({ duration: '时长' }, self.changesetErr)
            .exsit({ publishAt: '发布日期' }, self.changesetErr, opt)
            .dateFmt({ publishAt: '发布日期' }, self.changesetErr)
            .done()

          // const format1 = /^([01]?[0-9]|[0-5][0-9]):[0-5][0-9]$/
          // const format2 = /^(?:0[0-2]|0[0-9]):[0-5][0-9]:[0-5][0-9]$/

          if (!result.passed) flashState(self, 'ratKey', result.rat)
          return result.passed
        }
        default: {
          return false
        }
      }
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default VideoEditor
