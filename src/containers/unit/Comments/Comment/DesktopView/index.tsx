import { FC, memo, Fragment } from 'react'
import { contains } from 'ramda'
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
}

const Comment: FC<TProps> = (props) => {
  const { foldedIds, data } = props
  const isFolded = contains(data.id, foldedIds)

  return (
    <Fragment>
      {isFolded ? <FoldLayout {...props} /> : <DefaultLayout {...props} />}
    </Fragment>
  )
}

export default memo(Comment)
