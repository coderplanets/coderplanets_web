/*
 *
 * UserList
 *
 */

import { FC, memo } from 'react'

import type { TPagedUsers } from '@/spec'
import { TYPE } from '@/constant'

import { buildLog } from '@/utils/logger'

import Pagi from '@/widgets/Pagi'
import EditorLayout from './EditorLayout'
import NormalLayout from './NormalLayout'

import { onPageChange } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('w:UserList:index')

type TProps = {
  type: string
  data: TPagedUsers
}

const UserList: FC<TProps> = ({
  type,
  data: { entries, pageNumber, pageSize, totalCount },
}) => (
  <>
    {type === TYPE.USER_LISTER_COMMUNITY_EDITORS ? (
      <EditorLayout users={entries} />
    ) : (
      <NormalLayout users={entries} />
    )}

    <br />
    <Pagi
      pageNumber={pageNumber}
      pageSize={pageSize}
      totalCount={totalCount}
      onChange={onPageChange}
    />
    <br />
    <br />
  </>
)

export default memo(UserList)
