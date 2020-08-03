import React from 'react'
import { isEmpty } from 'ramda'

import { TYPE } from '@/constant'
import { Trans } from '@/utils'
import { VideoItemLoading } from '@/components/LoadingEffects'
import VideoItem from '@/components/VideoItem'

import EmptyThread from '@/components/EmptyThread'
import EmptyLabel from '@/components/EmptyLabel'

const VideosList = ({ props }) => {
  const {
    entries,
    active,
    curView,
    community,
    thread,
    emptyPrefix,
    onPreview,
    accountInfo,
  } = props

  switch (curView) {
    case TYPE.RESULT:
      return (
        <>
          {entries.map((entry) => (
            <VideoItem
              key={entry.id}
              entry={entry}
              active={active}
              accountInfo={accountInfo}
              onPreview={() => onPreview(entry)}
            />
          ))}
        </>
      )

    case TYPE.RESULT_EMPTY:
      return (
        <>
          {isEmpty(emptyPrefix) ? (
            <EmptyThread community={community} thread={thread} />
          ) : (
            <EmptyLabel
              text={`${emptyPrefix}${Trans(thread)}信息`}
              size="large"
            />
          )}
        </>
      )

    default:
      return <VideoItemLoading num={4} />
  }
}

export default React.memo(VideosList)
