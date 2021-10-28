import { FC, memo, useEffect, useRef } from 'react'

import type { TInputData } from '../spec'

import { Wrapper, Input, Title, Desc } from '../styles/content/name_part'
import { inputOnChange } from '../logic'

type TProps = {
  inputData: TInputData
}

const NamePart: FC<TProps> = ({ inputData }) => {
  const { title } = inputData
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
      <Title>发布作品</Title>
      <Desc>你（们）的作品名称是 ？</Desc>
      <Input
        value={title || ''}
        onChange={(e) => inputOnChange(e, 'title')}
        autoFocus
      />
    </Wrapper>
  )
}

export default memo(NamePart)
