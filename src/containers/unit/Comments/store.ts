/*
 * CommentsStore store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
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

import type {
  TRootStore,
  TCommunity,
  TAccount,
  TUser,
  TArticle,
  TThread,
  TRoute,
  TID,
  TPagedComments,
  TComment,
  TEmotion,
} from '@/spec'
// import { TYPE } from '@/constant'
import { markStates, toJS } from '@/utils/mobx'
import { changeset } from '@/utils/validator'
import { Comment, PagedComments, emptyPagi, Mention } from '@/model'

import { MODE } from './constant'

const mentionMapper = (m) => ({ id: m.id, avatar: m.avatar, name: m.nickname })

const CommentsStore = T.model('CommentsStore', {
  mode: T.optional(T.enumeration([MODE.REPLIES, MODE.TIMELINE]), MODE.REPLIES),
  // toggle main comment box
  showInputBox: T.optional(T.boolean, false),
  // toggle editor inside the comment box
  showInputEditor: T.optional(T.boolean, true),
  // toggle markdown drawer inside the comment box
  showInputPreview: T.optional(T.boolean, false),

  // toggle modal editor for reply
  showReplyBox: T.optional(T.boolean, false),
  showReplyEditor: T.optional(T.boolean, false),

  // current to be delete comment id, use to target the confirm mask
  tobeDeleteId: T.maybeNull(T.string),
  // words count for current comment (include reply comment)
  countCurrent: T.optional(T.number, 0),
  // content input of current comment editor
  editContent: T.optional(T.string, ''),
  // content input of current reply comment editor
  replyContent: T.optional(T.string, ''),
  // comments pagination data of current COMMUNITY / PART
  pagedComments: T.optional(PagedComments, emptyPagi),

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

  foldedCommentIds: T.optional(T.array(T.string), []),
})
  .views((self) => ({
    get curRoute(): TRoute {
      const root = getParent(self) as TRootStore
      return root.curRoute
    },
    get foldedIds(): TID[] {
      return toJS(self.foldedCommentIds)
    },
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get referUsersData(): TUser[] {
      const referUsers = toJS(self.referUsers)
      const extractMentions = toJS(self.extractMentions)
      // @ts-ignore
      return filter((user) => contains(user.name, extractMentions), referUsers)
    },
    get participators(): TUser[] {
      const root = getParent(self) as TRootStore
      const { commentsParticipants } = root.viewing.viewingArticle
      /*
      const commentsParticipants = [
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

      return map(mentionMapper, commentsParticipants)
    },
    get mentionListData() {
      return toJS(self.mentionList)
    },
    get pagedCommentsData(): TPagedComments {
      return toJS(self.pagedComments)
    },
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.account.accountInfo
    },
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing.community)
    },
    get communityRaw(): string {
      const root = getParent(self) as TRootStore
      // const viewingCommunity = toJS(self.root.viewing.community)
      // if (viewingCommunity.raw) return viewingCommunity.raw

      return root.viewing.viewingArticle.originalCommunity.raw
    },
    get activeThread(): Uppercase<TThread> {
      const root = getParent(self) as TRootStore
      const { activeThread, viewingThread } = root.viewing
      return toUpper(viewingThread || activeThread)
    },
    get viewingArticle(): TArticle {
      const root = getParent(self) as TRootStore
      return root.viewing.viewingArticle
    },
    get editCommentData() {
      return toJS(self.editComment)
    },
    get isAllFolded(): boolean {
      const slf = self as TStore
      const { foldedIds, pagedCommentsData } = slf
      return foldedIds.length === pagedCommentsData.totalCount
    },
  }))
  .actions((self) => ({
    changesetErr(options): void {
      const root = getParent(self) as TRootStore
      root.changesetErr(options)
    },

    validator(type): boolean {
      const { changesetErr } = self as TStore
      switch (type) {
        case 'create': {
          const result = changeset({ editContent: self.editContent })
            // @ts-ignore
            .exist({ editContent: '讨论内容' }, changesetErr)
            .done()

          return result.passed
        }
        case 'reply': {
          const result = changeset({ replyContent: self.replyContent })
            // @ts-ignore
            .exist({ replyContent: '回复内容' }, changesetErr)
            .done()

          return result.passed
        }
        default: {
          return false
        }
      }
    },
    addReferUser(user: TUser): void {
      const index = findIndex((u) => u.id === String(user.id), self.referUsers)
      if (index === -1) {
        self.referUsers.push({
          id: String(user.id),
          name: user.name,
          avatar: user.avatar,
        })
      }
    },
    updateMentionList(mentionArray): void {
      const curMentionList = clone(self.mentionList)
      const uniqList = concat(curMentionList, mentionArray)
      const mentionList = map(mentionMapper, uniqList)

      // log('mentionList: ', mentionList)
      // log('uniq: ', R.uniq(R.concat(mentionList, self.participators)))

      // @ts-ignore
      self.mentionList = uniq(concat(mentionList, self.participators))
    },
    updateOneComment(id, comment = {}): void {
      const { entries } = self.pagedCommentsData

      const index = findIndex(propEq('id', id), entries)
      // @ts-ignore
      self.pagedComments.entries[index] = merge(entries[index], comment)
    },
    updateUpvote(comment: TComment, info): void {
      const { id, replyToId } = comment
      const slf = self as TStore
      const { entries } = slf.pagedCommentsData

      if (self.mode === MODE.REPLIES && replyToId) {
        const parentIndex = findIndex(propEq('id', replyToId), entries)
        if (parentIndex < 0) return
        const parentComment = entries[parentIndex]
        const replyIndex = findIndex(propEq('id', id), parentComment.replies)
        if (replyIndex < 0) return
        const replyComment = parentComment.replies[replyIndex]
        self.pagedComments.entries[parentIndex].replies[replyIndex] = {
          ...replyComment,
          ...info,
        }
      } else {
        // timeline & replies parent comment
        const index = findIndex(propEq('id', id), entries)

        if (index < 0) return
        // @ts-ignore
        self.pagedComments.entries[index] = { ...entries[index], ...info }
      }
    },
    upvoteEmotion(comment: TComment, emotion: TEmotion): void {
      const { id, replyToId } = comment
      const slf = self as TStore
      const { entries } = slf.pagedCommentsData

      if (self.mode === MODE.REPLIES && replyToId) {
        const parentIndex = findIndex(propEq('id', replyToId), entries)
        if (parentIndex < 0) return
        const parentComment = entries[parentIndex]
        const replyIndex = findIndex(propEq('id', id), parentComment.replies)
        if (replyIndex < 0) return
        const replyComment = parentComment.replies[replyIndex]
        self.pagedComments.entries[parentIndex].replies[replyIndex].emotions = {
          ...replyComment.emotions,
          ...emotion,
        }
      } else {
        const index = findIndex(propEq('id', id), entries)
        if (index < 0) return
        // @ts-ignore
        self.pagedComments.entries[index].emotions = {
          ...entries[index].emotions,
          ...emotion,
        }
      }
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof CommentsStore>
export default CommentsStore
