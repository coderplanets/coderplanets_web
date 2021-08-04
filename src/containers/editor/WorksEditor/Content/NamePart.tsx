import { FC, Fragment, memo } from 'react'

import type { TWorks } from '@/spec'
import { nilOrEmpty } from '@/utils/validator'
import ArrowButton from '@/components/Buttons/ArrowButton'

import CommonQuestions from './CommonQuestions'

import { Wrapper, Input, Label } from '../styles/content/name_part'
import { updateWorks, nextStep } from '../logic'

type TProps = {
  works: TWorks
}

const NamePart: FC<TProps> = ({ works }) => {
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
        <Fragment>
          <br />
          <CommonQuestions />
        </Fragment>
      )}

      {valid && (
        <Fragment>
          <br />
          <ArrowButton size="large" onClick={nextStep}>
            下一步
          </ArrowButton>
        </Fragment>
      )}
    </Wrapper>
  )
}

export default memo(NamePart)
