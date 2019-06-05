/*
 * CommentsStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makelogger, stripMobx, TYPE, changeset } from '@utils'
import { Comment, PagedComments, emptyPagiData, Mention } from '@model'

/* eslint-disable-next-line */
const log = makelogger('S:CommentsStore')

const mentionMapper = m => ({ id: m.id, avatar: m.avatar, name: m.nickname })

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

    isEdit: t.optional(t.boolean, false),
    editComment: t.maybeNull(Comment),

    // current "@user" in valid array format
    referUsers: t.optional(t.array(Mention), []),
    // current "@user" in string list
    extractMentions: t.optional(t.array(t.string), []),

    // parrent comment of current reply
    replyToComment: t.maybeNull(Comment),

    // mention users in content
    mentionList: t.optional(t.array(Mention), []),

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
        user => R.contains(user.name, extractMentions),
        referUsers
      )
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
      return R.map(mentionMapper, commentsParticipators)
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
      return R.toUpper(viewingThread || activeThread)
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
          name: user.name,
          avatar: user.avatar,
        })
      }
    },
    updateMentionList(mentionArray) {
      const curMentionList = R.clone(self.mentionList)
      const uniqList = R.concat(curMentionList, mentionArray)
      const mentionList = R.map(mentionMapper, uniqList)

      // log('mentionList: ', mentionList)
      // log('uniq: ', R.uniq(R.concat(mentionList, self.participators)))

      self.mentionList = R.uniq(R.concat(mentionList, self.participators))
    },
    updateOneComment(id, comment = {}) {
      const { entries } = self.pagedCommentsData

      const index = R.findIndex(R.propEq('id', id), entries)
      self.pagedComments.entries[index] = R.merge(entries[index], comment)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommentsStore
