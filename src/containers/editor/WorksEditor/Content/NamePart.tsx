import { FC, memo } from 'react'

import { nilOrEmpty } from '@/utils/validator'
import ArrowButton from '@/widgets/Buttons/ArrowButton'

import type { TInputData } from '../spec'
import CommonQuestions from './CommonQuestions'

import {
  Wrapper,
  Input,
  Label,
  NextButtonWrapper,
} from '../styles/content/name_part'
import { inputOnChange, nextStep } from '../logic'

type TProps = {
  inputData: TInputData
}

const NamePart: FC<TProps> = ({ inputData }) => {
  const { title } = inputData
  const valid = !nilOrEmpty(title)

  return (
    <Wrapper>
      <Label>你（们）的作品名称是？</Label>
      <Input
        value={title || ''}
        onChange={(e) => inputOnChange(e, 'title')}
        autoFocus
      />
      {!valid && <CommonQuestions />}

      {valid && (
        <NextButtonWrapper>
          <ArrowButton size="large" onClick={nextStep}>
            下一步
          </ArrowButton>
        </NextButtonWrapper>
      )}
    </Wrapper>
  )
}

export default memo(NamePart)
