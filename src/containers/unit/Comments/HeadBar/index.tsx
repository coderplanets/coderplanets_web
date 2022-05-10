import { FC, memo, useState, Fragment } from 'react'

import type { TCommentsState } from '@/spec'

import StateBar from './StateBar'
import PublishBar from './PublishBar'
import PublishEditor from '../Editor/PublishEditor'

import { Wrapper } from '../styles/head_bar'

import type { TMode, TAPIMode, TEditState } from '../spec'

export type TProps = {
  mode: TMode
  apiMode: TAPIMode
  isAllFolded: boolean
  loading: boolean
  basicState: TCommentsState
  editState: TEditState
}

const Header: FC<TProps> = ({
  basicState,
  mode,
  isAllFolded,
  loading,
  apiMode,
  editState,
}) => {
  const { commentBody, submitState } = editState
  const [barMode, setBarMode] = useState('normal')

  return (
    <Wrapper>
      {barMode === 'normal' && (
        <StateBar
          apiMode={apiMode}
          isAllFolded={isAllFolded}
          basicState={basicState}
          mode={mode}
          loading={loading}
          callEditor={() => setBarMode('publish')}
        />
      )}

      {barMode === 'publish' && (
        <Fragment>
          <PublishBar closeEditor={() => setBarMode('normal')} />
          <PublishEditor body={commentBody} submitState={submitState} />
        </Fragment>
      )}
    </Wrapper>
  )
}

export default memo(Header)
