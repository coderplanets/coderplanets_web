import { FC, memo, Fragment } from 'react'
import { includes } from 'ramda'
import { TID } from '@/spec'

import type { TAccount, TComment } from '@/spec'

import DefaultLayout from './DefaultLayout'
import FoldLayout from './FoldLayout'

type TProps = {
  data: TComment
  accountInfo: TAccount
  tobeDeleteId: string
  hasReplies?: boolean
  foldedIds: TID[]
  hidedIds: TID[]
}

const Comment: FC<TProps> = (props) => {
  const { foldedIds, hidedIds, data } = props
  const isFolded = includes(data.id, foldedIds)
  const isHided = includes(data.id, hidedIds)

  return (
    <Fragment>
      {isFolded && !isHided ? (
        <FoldLayout {...props} />
      ) : (
        <DefaultLayout {...props} />
      )}
    </Fragment>
  )
}

export default memo(Comment)
