/*
 *
 * SocialEditor
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'
import AddButton from '@/widgets/Buttons/AddButton'

import {
  Wrapper,
  SelectWrapper,
  Label,
  InputWrapper,
  IconWrapper,
  Inputer,
  Icon,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:SocialEditor:index')

type TProps = {
  testid?: string
}

const SocialEditor: FC<TProps> = ({ testid = 'social-editor' }) => {
  const list = ['Twitter', 'Weibo']

  return (
    <Wrapper testid={testid}>
      <Label>社交账号</Label>
      <InputWrapper>
        <IconWrapper>
          <Icon.Twitter />
        </IconWrapper>
        <Inputer placeholder="twitter" />
      </InputWrapper>
      <AddButton top={10} dimWhenIdle>
        添加
      </AddButton>
      <SelectWrapper>
        {list.map((name) => {
          const SocialIcon = Icon[name]
          return <SocialIcon key={name} />
        })}
      </SelectWrapper>
    </Wrapper>
  )
}

export default memo(SocialEditor)
