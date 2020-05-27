/*
 * CommentsStore store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import {
  map,
  findIndex,
  filter,
  contains,
  clone,
  propEq,
  uniq,
  concat,
  toUpper,
  merge,
} from 'ramda'

import { TYPE } from '@/constant'
import { markStates, buildLog, stripMobx, changeset } from '@/utils'
import { Comment, PagedComments, emptyPagiData, Mention } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:CommentsStore')

const mentionMapper = m => ({ id: m.id, avatar: m.avatar, name: m.nickname })

const CommentsStore = T.model('CommentsStore', {
  // toggle main comment box
  showInputBox: T.optional(T.boolean, false),
  // toggle editor inside the comment box
  showInputEditor: T.optional(T.boolean, false),
  // toggle markdown preview inside the comment box
  showInputPreview: T.optional(T.boolean, false),

  // toggle modal editor for reply
  showReplyBox: T.optional(T.boolean, false),
  showReplyEditor: T.optional(T.boolean, false),
  showReplyPreview: T.optional(T.boolean, false),

  // current to be delete comment id, use to target the confirm mask
  tobeDeleteId: T.maybeNull(T.string),
  // words count for current comment (include reply comment)
  countCurrent: T.optional(T.number, 0),
  // cur filter type of comment list
  filterType: T.optional(
    T.enumeration('filterType', [
      TYPE.DESC_INSERTED,
      TYPE.ASC_INSERTED,
      TYPE.MOST_LIKES,
      TYPE.MOST_DISLIKES,
    ]),
    TYPE.ASC_INSERTED
  ),
  // content input of current comment editor
  editContent: T.optional(T.string, ''),
  // content input of current reply comment editor
  replyContent: T.optional(T.string, ''),
  // comments pagination data of current COMMUNITY / PART
  pagedComments: T.optional(PagedComments, emptyPagiData),

  isEdit: T.optional(T.boolean, false),
  editComment: T.maybeNull(Comment),

  // current "@user" in valid array format
  referUsers: T.optional(T.array(Mention), []),
  // current "@user" in string list
  extractMentions: T.optional(T.array(T.string), []),

  // parrent comment of current reply
  replyToComment: T.maybeNull(Comment),

  // mention users in content
  mentionList: T.optional(T.array(Mention), []),

  // toggle loading for creating comment
  creating: T.optional(T.boolean, false),
  // toggle loading for creating reply comment
  replying: T.optional(T.boolean, false),
  // toggle loading for comments list
  loading: T.optional(T.boolean, false),
  // toggle loading for first item of commetns list
  loadingFresh: T.optional(T.boolean, false),
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
      return filter(user => contains(user.name, extractMentions), referUsers)
    },
    get participators() {
      const { commentsParticipators } = self.root.viewing.viewingData
      /*
      const commentsParticipators = [
        {
          id: '112',
          nickname: 'mydearxym',
          avatar: 'https://avatars2.githubusercontent.com/u/6184465?v=4',
        },
        {
          id: '113',
          nickname: 'Julian',
          avatar:
            'http://coderplanets.oss-cn-beijing.aliyuncs.com/mock/avatar4.png',
        },
      ]
      */
      return map(mentionMapper, commentsParticipators)
    },
    get mentionListData() {
      return stripMobx(self.mentionList)
    },
    get pagedCommentsData() {
      return stripMobx(self.pagedComments)
    },
    get accountInfo() {
      return self.root.account.accountInfo
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get communityRaw() {
      // const viewingCommunity = stripMobx(self.root.viewing.community)
      // if (viewingCommunity.raw) return viewingCommunity.raw

      return self.root.viewing.viewingData.origialCommunity.raw
    },
    get activeThread() {
      const { activeThread, viewingThread } = self.root.viewing
      return toUpper(viewingThread || activeThread)
    },
    get viewingData() {
      return self.root.viewingData
    },
    get editCommentData() {
      return stripMobx(self.editComment)
    },
  }))
  .actions(self => ({
    authWarning(options) {
      self.root.authWarning(options)
    },
    changesetErr(options) {
      self.root.changesetErr(options)
    },

    validator(type) {
      switch (type) {
        case 'create': {
          const result = changeset({ editContent: self.editContent })
            .exist({ editContent: '评论内容' }, self.changesetErr)
            .done()

          return result.passed
        }
        case 'reply': {
          const result = changeset({ replyContent: self.replyContent })
            .exist({ replyContent: '回复内容' }, self.changesetErr)
            .done()

          return result.passed
        }
        default: {
          return false
        }
      }
    },
    addReferUser(user) {
      const index = findIndex(u => u.id === String(user.id), self.referUsers)
      if (index === -1) {
        self.referUsers.push({
          id: String(user.id),
          name: user.name,
          avatar: user.avatar,
        })
      }
    },
    updateMentionList(mentionArray) {
      const curMentionList = clone(self.mentionList)
      const uniqList = concat(curMentionList, mentionArray)
      const mentionList = map(mentionMapper, uniqList)

      // log('mentionList: ', mentionList)
      // log('uniq: ', R.uniq(R.concat(mentionList, self.participators)))

      self.mentionList = uniq(concat(mentionList, self.participators))
    },
    updateOneComment(id, comment = {}) {
      const { entries } = self.pagedCommentsData

      const index = findIndex(propEq('id', id), entries)
      self.pagedComments.entries[index] = merge(entries[index], comment)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommentsStore
