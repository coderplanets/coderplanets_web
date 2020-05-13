/*
 * VideoEditor store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, buildLog, stripMobx, changeset, flashState } from '@utils'
import { Video } from '@model'

/* eslint-disable-next-line */
const log = buildLog('S:VideoEditor')

const VideoEditor = t
  .model('VideoEditor', {
    editVideo: t.optional(Video, { source: 'youtube' }),
    isEdit: t.optional(t.boolean, false),
    publishing: t.optional(t.boolean, false),

    ratKey: t.optional(t.string, ''),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get labelsData() {
      return self.root.labeler.labelsData
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
      self.mark({ editVideo })
    },
    validator(type) {
      switch (type) {
        case 'publish': {
          const opt = { msg: '不能为空 (请填写 #必填# 字段)' }

          const result = changeset(self.editVideoData)
            .exist({ thumbnil: '缩略图' }, self.changesetErr)
            .exist({ thumbnil: '视频封面' }, self.changesetErr)
            .exist({ title: '视频标题' }, self.changesetErr, opt)
            .min({ title: '视频标题' }, 5, self.changesetErr, opt)
            .exist({ source: '视频来源' }, self.changesetErr, opt)
            .exist({ link: '视频链接' }, self.changesetErr, opt)
            .startsWith({ link: '视频链接' }, 'https://', self.changesetErr)
            .exist({ originalAuthor: '原作者昵称' }, self.changesetErr, opt)
            .exist({ originalAuthorLink: '原作者链接' }, self.changesetErr, opt)
            .startsWith(
              { originalAuthorLink: '原作者链接' },
              'https://',
              self.changesetErr
            )
            .exist({ desc: '视频描述' }, self.changesetErr, opt)
            .min({ desc: '视频描述' }, 10, self.changesetErr, opt)
            .exist({ duration: '时长' }, self.changesetErr, opt)
            .durationFmt({ duration: '时长' }, self.changesetErr)
            .exist(
              { publishAt: '发布日期' },
              self.changesetErr,
              R.merge(opt, { skip: self.isEdit })
            )
            .dateFmt(
              { publishAt: '发布日期' },
              self.changesetErr,
              R.merge(opt, { skip: self.isEdit })
            )
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
    reset() {
      self.isEdit = false
      self.editVideo = { source: 'youtube' }
      self.publishing = false
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default VideoEditor
