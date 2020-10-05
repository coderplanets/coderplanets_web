import React from 'react'
import T from 'prop-types'
import TimeAgo from 'timeago-react'

import Maybe from '@/components/Maybe'
import Tooltip from '@/components/Tooltip'

import {
  Reaction,
  PlainAction,
  ReactionName,
  SyncTime,
  PopInfo,
  Divider,
} from './styles/reaction'

const LastSyncInfo = ({ show, data }) => {
  const lastSyncTime = data.lastSync || data.updatedAt || null

  return (
    <Maybe test={show}>
      <Tooltip
        placement="bottom-start"
        content={<PopInfo>上次与该 Github repo 同步的时间</PopInfo>}
      >
        <Reaction>
          <Divider />
          <PlainAction>
            <ReactionName>同步于:</ReactionName>
          </PlainAction>
          <SyncTime>
            {lastSyncTime ? (
              <TimeAgo datetime={lastSyncTime} locale="zh_CN" />
            ) : (
              '--'
            )}
          </SyncTime>
        </Reaction>
      </Tooltip>
    </Maybe>
  )
}

LastSyncInfo.propTypes = {
  data: T.shape({
    lastSync: T.string,
    updatedAt: T.string,
  }).isRequired,
  show: T.bool,
}

LastSyncInfo.defaultProps = {
  show: true,
}

export default React.memo(LastSyncInfo)
