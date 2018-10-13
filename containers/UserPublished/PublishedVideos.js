import React from 'react'

import { VideoItemLoading, VideoItem } from '../../components'

import { uid, TYPE } from '../../utils'

const PublishedVideos = ({ entries, curView, active }) => {
  switch (curView) {
    case TYPE.RESULT: {
      return (
        <React.Fragment>
          {entries.map(entry => (
            <VideoItem
              key={uid.gen()}
              entry={entry}
              active={active}
              onTitleSelect={console.log}
            />
          ))}
        </React.Fragment>
      )
    }
    default:
      return <VideoItemLoading num={4} />
  }
}

export default PublishedVideos
