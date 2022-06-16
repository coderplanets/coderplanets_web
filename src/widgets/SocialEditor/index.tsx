/*
 *
 * SocialEditor
 *
 */

import { FC, memo } from 'react'

import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'

import AddButton from '@/widgets/Buttons/AddButton'

import {
  Wrapper,
  Label,
  InputWrapper,
  IconWrapper,
  SocialIcon,
  Inputer,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:SocialEditor:index')

type TProps = {
  testid?: string
}

const SocialEditor: FC<TProps> = ({ testid = 'social-editor' }) => {
  return (
    <Wrapper testid={testid}>
      <Label>社交账号</Label>
      <InputWrapper>
        <IconWrapper>
          <SocialIcon src={`${ICON}/social/twitter-share.png`} />
        </IconWrapper>
        <Inputer />
      </InputWrapper>
      <AddButton top={10} dimWhenIdle>
        添加
      </AddButton>
    </Wrapper>
  )
}

export default memo(SocialEditor)
