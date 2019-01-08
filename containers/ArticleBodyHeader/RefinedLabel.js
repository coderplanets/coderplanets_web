import React from 'react'
import R from 'ramda'

import { ICON_CMD } from '../../config'
import { Wrapper, RefinedIcon, RefinedText } from './styles/refined_label'

const RefinedLabel = ({ tags }) => {
  const isRefined = R.contains('refined', R.pluck('title', tags))

  return (
    <React.Fragment>
      {isRefined ? (
        <Wrapper>
          <RefinedIcon src={`${ICON_CMD}/diamond_frame.svg`} />
          <RefinedText>精 华</RefinedText>
        </Wrapper>
      ) : (
        <div />
      )}
    </React.Fragment>
  )
}

export default RefinedLabel
