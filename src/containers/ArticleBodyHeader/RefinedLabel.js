import React from 'react'
import { contains, pluck } from 'ramda'

import { ICON_CMD } from '@/config'
import { Wrapper, RefinedIcon, RefinedText } from './styles/refined_label'

const RefinedLabel = ({ tags }) => {
  const isRefined = contains('refined', pluck('title', tags))

  return (
    <>
      {isRefined ? (
        <Wrapper>
          <RefinedIcon src={`${ICON_CMD}/diamond_frame.svg`} />
          <RefinedText>精 华</RefinedText>
        </Wrapper>
      ) : (
        <div />
      )}
    </>
  )
}

export default React.memo(RefinedLabel)
