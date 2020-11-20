import React from 'react'

import { nilOrEmpty } from '@/utils'
import { ArrowButton } from '@/components/Buttons'

import CommonQuestions from './CommonQuestions'

import { Wrapper, InputBar, Label } from '../styles/content/name_part'
import { updateWorks } from '../logic'

const NamePart = ({ works }) => {
  const valid = !nilOrEmpty(works.title)

  return (
    <Wrapper>
      <Label>你的作品名称是？</Label>
      <InputBar
        value={works.title}
        onChange={(e) => {
          console.log('onChange e: ', e.target.value)
          updateWorks('title', e.target.value)
        }}
      />
      {!valid && (
        <React.Fragment>
          <br />
          <CommonQuestions />
        </React.Fragment>
      )}

      {valid && (
        <React.Fragment>
          <br />
          <ArrowButton size="large">下一步</ArrowButton>
        </React.Fragment>
      )}
    </Wrapper>
  )
}

export default React.memo(NamePart)
