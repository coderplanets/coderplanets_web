import React from 'react'
import PropTypes from 'prop-types'
import TimeAgo from 'timeago-react'

import Maybe from 'components/Maybe'
import Popover from 'components/Popover'

import {
  Reaction,
  PlainAction,
  ReactionName,
  SyncTime,
  PopInfo,
  Divider,
} from './styles/reaction'

const LastSyncInfo = ({ show, data }) => (
  <Maybe test={show}>
    <Popover
      placement="bottomLeft"
      trigger="hover"
      content={<PopInfo>上次与该 Github repo 同步的时间</PopInfo>}
    >
      <Reaction>
        <Divider />
        <PlainAction>
          <ReactionName>同步于:</ReactionName>
        </PlainAction>
        <SyncTime>
          {data.lastSync ? (
            <TimeAgo datetime={data.lastSync} locale="zh_CN" />
          ) : (
            '--'
          )}
        </SyncTime>
      </Reaction>
    </Popover>
  </Maybe>
)

LastSyncInfo.propTypes = {
  data: PropTypes.shape({
    lastSync: PropTypes.string,
  }).isRequired,
  show: PropTypes.bool,
}

LastSyncInfo.defaultProps = {
  show: true,
}

export default LastSyncInfo
