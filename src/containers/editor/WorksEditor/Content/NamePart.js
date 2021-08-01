import React from 'react'

import { nilOrEmpty } from '@/utils/validator'
import { ArrowButton } from '@/components/Buttons'

import CommonQuestions from './CommonQuestions'

import { Wrapper, Input, Label } from '../styles/content/name_part'
import { updateWorks, nextStep } from '../logic'

const NamePart = ({ works }) => {
  const valid = !nilOrEmpty(works.title)

  return (
    <Wrapper>
      <Label>你的作品名称是？</Label>
      <Input
        value={works.title}
        onChange={(e) => updateWorks('title', e.target.value)}
        autoFocus
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
          <ArrowButton size="large" onClick={nextStep}>
            下一步
          </ArrowButton>
        </React.Fragment>
      )}
    </Wrapper>
  )
}

export default React.memo(NamePart)
