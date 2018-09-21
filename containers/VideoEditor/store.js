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
    get editVideoData() {
      return {
        ...stripMobx(self.editVideo),
      }
    },
  }))
  .actions(self => ({
    toast(type, options) {
      self.root.toast(type, options)
    },
    changeErr(options) {
      self.toast('error', options)
    },
    updateEditing(sobj) {
      const editVideo = R.merge(self.editVideoData, { ...sobj })
      self.markState({ editVideo })
    },
    validator(type) {
      switch (type) {
        case 'publish': {
          const result = changeset(self.editVideoData)
            .exsit({ title: '视频标题' }, self.changeErr)
            .min({ title: '视频标题' }, 10, self.changeErr)
            .exsit({ desc: '视频描述' }, self.changeErr)
            .min({ desc: '视频描述' }, 10, self.changeErr)
            .done()

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
