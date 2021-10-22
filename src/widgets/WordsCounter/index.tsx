import { FC, memo, useEffect } from 'react'

import type { TSpace } from '@/spec'
import { countWords } from './helper'
import { Wrapper, Hint, Main, CurNum, Slash, TotalNum } from './styles'

type TProps = TSpace & {
  body: string
  max?: number
  min?: number
  onChange?: (isValid: boolean) => void
}

const WordsCounter: FC<TProps> = ({
  body,
  max = 2000,
  min = 10,
  onChange,
  ...restProps
}) => {
  const currentCount = countWords(body)
  const invalid = currentCount < min || currentCount > max

  useEffect(() => {
    const isValid = currentCount >= min && currentCount <= max
    onChange?.(isValid)
  }, [currentCount, onChange, min, max])

  return (
    <Wrapper {...restProps}>
      <Hint>当前</Hint>
      <Main>
        <CurNum invalid={invalid}>{currentCount}</CurNum> <Slash>/</Slash>{' '}
        {currentCount < min && <TotalNum>{min}</TotalNum>}
        {currentCount >= min && <TotalNum>{max}</TotalNum>}
      </Main>
      {currentCount < min && <Hint>字最少</Hint>}
      {currentCount >= min && <Hint>字最多</Hint>}
    </Wrapper>
  )
}

export default memo(WordsCounter)
