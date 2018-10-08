/*
 * CommentsStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import {
  markStates,
  makeDebugger,
  stripMobx,
  TYPE,
  changeset,
  // THREAD,
  // subPath2Thread,
} from '../../utils'
import { Comment, PagedComments, emptyPagiData } from '../../stores/SharedModel'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:CommentsStore')
/* eslint-enable no-unused-vars */

const Mention = t.model('Mention', {
  id: t.string,
  nickname: t.string,
  avatar: t.string,
})

const CommentsStore = t
  .model('CommentsStore', {
    // toggle main comment box
    showInputBox: t.optional(t.boolean, false),
    // toggle editor inside the comment box
    showInputEditor: t.optional(t.boolean, false),
    // toggle markdown preview inside the comment box
    showInputPreview: t.optional(t.boolean, false),

    // toggle modal editor for reply
    showReplyBox: t.optional(t.boolean, false),
    showReplyEditor: t.optional(t.boolean, false),
    showReplyPreview: t.optional(t.boolean, false),

    // current to be delete comment id, use to target the confirm mask
    tobeDeleteId: t.maybeNull(t.string),
    // words count for current comment (include reply comment)
    countCurrent: t.optional(t.number, 0),
    // cur filter type of comment list
    filterType: t.optional(
      t.enumeration('filterType', [
        TYPE.DESC_INSERTED,
        TYPE.ASC_INSERTED,
        TYPE.MOST_LIKES,
        TYPE.MOST_DISLIKES,
      ]),
      TYPE.ASC_INSERTED
    ),
    // content input of current comment editor
    editContent: t.optional(t.string, ''),
    // content input of current reply comment editor
    replyContent: t.optional(t.string, ''),
    // comments pagination data of current COMMUNITY / PART
    pagedComments: t.optional(PagedComments, emptyPagiData),

    // current "@user" in valid array format
    referUsers: t.optional(t.array(Mention), []),
    // current "@user" in string list
    extractMentions: t.optional(t.array(t.string), []),

    // parrent comment of current reply
    replyToComment: t.maybeNull(Comment),

    // toggle loading for creating comment
    creating: t.optional(t.boolean, false),
    // toggle loading for creating reply comment
    replying: t.optional(t.boolean, false),
    // toggle loading for comments list
    loading: t.optional(t.boolean, false),
    // toggle loading for first item of commetns list
    loadingFresh: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get referUsersData() {
      const referUsers = stripMobx(self.referUsers)
      const extractMentions = stripMobx(self.extractMentions)
      return R.filter(
        user => R.contains(user.nickname, extractMentions),
        referUsers
      )
    },
    get pagedCommentsData() {
      return stripMobx(self.pagedComments)
    },
    get accountInfo() {
      return self.root.account.accountInfo
    },
    get activeThread() {
      const { activeThread } = self.root.viewing
      return R.toUpper(activeThread)
    },
    get viewingData() {
      return self.root.viewingData
    },
  }))
  .actions(self => ({
    changesetErr(options) {
      self.root.changesetErr(options)
    },

    validator(type) {
      switch (type) {
        case 'create': {
          const result = changeset({ editContent: self.editContent })
            .exsit({ editContent: '评论内容' }, self.changesetErr)
            .done()

          return result.passed
        }
        case 'reply': {
          const result = changeset({ replyContent: self.replyContent })
            .exsit({ replyContent: '回复内容' }, self.changesetErr)
            .done()

          return result.passed
        }
        default: {
          return false
        }
      }
    },
    addReferUser(user) {
      const index = R.findIndex(u => u.id === String(user.id), self.referUsers)
      if (index === -1) {
        self.referUsers.push({
          id: String(user.id),
          nickname: user.name,
          avatar: user.avatar,
        })
      }
    },
    updateOneComment(id, comment = {}) {
      const index = R.findIndex(R.propEq('id', id), self.entriesData)
      self.entries[index] = R.merge(self.entriesData[index], comment)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommentsStore
