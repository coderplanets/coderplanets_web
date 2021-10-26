import { FC, memo, useEffect, useRef } from 'react'

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
  const ref = useRef(null)

  // TODO: autoFocus not working here, fix later
  useEffect(() => {
    if (ref?.current) {
      const input = ref?.current?.querySelector('input')
      setTimeout(() => input?.focus(), 1000)
    }
  }, [ref])

  return (
    <Wrapper ref={ref}>
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
