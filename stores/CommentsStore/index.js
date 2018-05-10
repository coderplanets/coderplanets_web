/*
 * CommentsStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '../../utils'
import { User } from '../SharedModel'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:CommentsStore')
/* eslint-enable no-unused-vars */
const CommentBrief = t.model('CommentBrief', {
  id: t.maybe(t.string),
  body: t.maybe(t.string),
  floor: t.maybe(t.number),
  author: t.optional(User, {}),
})

const Comment = t.model('Comment', {
  id: t.maybe(t.string),
  body: t.maybe(t.string),
  author: t.optional(User, {}),
  floor: t.number,
  replyTo: t.maybe(CommentBrief),
  replies: t.optional(t.array(CommentBrief), []),
  /* desc: t.optional(t.string, ''), */
  /* raw: t.maybe(t.string), */
  /* logo: t.maybe(t.string), */
  contributesDigest: t.optional(t.array(t.number), []),
  repliesCount: t.optional(t.number, 0),
  likesCount: t.optional(t.number, 0),
  dislikesCount: t.optional(t.number, 0),
  viewerHasLiked: t.maybe(t.boolean),
  viewerHasDisliked: t.maybe(t.boolean),
  insertedAt: t.optional(t.string, ''),
  updatedAt: t.optional(t.string, ''),
})

const Mention = t.model('Mention', {
  id: t.string,
  nickname: t.string,
  avatar: t.string,
})

const CommentsStore = t
  .model('CommentsStore', {
    // toggle main comment editor
    showInputEditor: t.optional(t.boolean, false),
    // toggle modal editor for reply
    showReplyEditor: t.optional(t.boolean, false),
    // current to be delete comment id, use to target the confirm mask
    tobeDeleteId: t.maybe(t.string),
    // words count for current comment (include reply comment)
    countCurrent: t.optional(t.number, 0),
    // cur filter type of comment list
    filterType: t.optional(
      t.enumeration('filterType', [
        'DESC_INSERTED',
        'ASC_INSERTED',
        'MOST_LIKE',
        'MOST_DISLIKE',
      ]),
      'ASC_INSERTED'
    ),
    // content input of current comment editor
    editContent: t.optional(t.string, ''),
    // content input of current reply comment editor
    replyContent: t.optional(t.string, ''),
    // comments pagination data of current COMMUNITY / PART
    entries: t.optional(t.array(Comment), []),
    totalCount: t.optional(t.number, 0),
    pageNumber: t.optional(t.number, 0),
    totalPages: t.optional(t.number, 0),
    pageSize: t.optional(t.number, 0),

    // current "@user" in valid array format
    referUsers: t.optional(t.array(Mention), []),
    // current "@user" in string list
    extractMentions: t.optional(t.array(t.string), []),

    // parrent comment of current reply
    replyToComment: t.maybe(Comment),

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

    get entriesData() {
      return stripMobx(self.entries)
    },

    get accountInfo() {
      return self.root.account.accountInfo
    },

    get activeArticle() {
      // TODO: based on tab
      return self.root.postsPaper.active
    },
  }))
  .actions(self => ({
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
