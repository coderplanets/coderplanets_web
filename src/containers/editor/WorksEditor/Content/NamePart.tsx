import { FC, memo, useEffect, useRef } from 'react'

import type { TEditMode } from '@/spec'
import { nilOrEmpty } from '@/utils/validator'

import PublishRules from './PublishRules'

import type { TInputData } from '../spec'
import { Wrapper, Input, Title, Desc } from '../styles/content/name_part'
import { inputOnChange } from '../logic'

type TProps = {
  mode: TEditMode
  inputData: TInputData
}

const NamePart: FC<TProps> = ({ mode, inputData }) => {
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
      {mode === 'publish' ? <Title>发布作品</Title> : <Title>更新作品</Title>}
      <Desc>你（们）的作品名字是 ？</Desc>
      <Input
        value={title || ''}
        onChange={(e) => inputOnChange(e, 'title')}
        autoFocus
      />
      {nilOrEmpty(title) && <PublishRules />}
    </Wrapper>
  )
}

export default memo(NamePart)
