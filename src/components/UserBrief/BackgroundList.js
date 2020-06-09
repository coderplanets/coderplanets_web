import React from 'react'
import { isEmpty } from 'ramda'

import {
  BackgroundItem,
  BackgroundDetailItem,
  BackgroundDivider,
} from './styles'

const WorkBackgroundList = ({ user: { workBackgrounds }, first }) => {
  if (isEmpty(workBackgrounds)) return null

  if (first) {
    const bg = workBackgrounds[0]
    return (
      <BackgroundItem>
        {bg.company}
        {bg.title && <BackgroundDivider />}
        {bg.title}
      </BackgroundItem>
    )
  }
  return (
    <div>
      {workBackgrounds.map((bg) => (
        <BackgroundDetailItem key={bg.title + bg.company}>
          {bg.company}
          {bg.title && <BackgroundDivider />}
          {bg.title}
        </BackgroundDetailItem>
      ))}
    </div>
  )
}

const EduBackgroundList = ({ user: { educationBackgrounds }, first }) => {
  if (isEmpty(educationBackgrounds)) return null

  if (first) {
    const bg = educationBackgrounds[0]
    return (
      <BackgroundItem>
        {bg.school}
        {bg.major && <BackgroundDivider />}
        {bg.major}
      </BackgroundItem>
    )
  }
  return (
    <div>
      {educationBackgrounds.map((bg) => (
        <BackgroundDetailItem key={bg.school + bg.major}>
          {bg.school}
          {bg.major && <BackgroundDivider />}
          {bg.major}
        </BackgroundDetailItem>
      ))}
    </div>
  )
}

const BackgroundList = ({ type, user, first }) => {
  switch (type) {
    case 'work':
      return <WorkBackgroundList user={user} first={first} />

    case 'education':
      return <EduBackgroundList user={user} first={first} />

    default:
      return <div>unknow background option</div>
  }
}

export default React.memo(BackgroundList)
