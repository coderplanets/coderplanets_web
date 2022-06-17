/*
 *
 * SocialEditor
 *
 */

import { FC, memo, useState } from 'react'

import { buildLog } from '@/utils/logger'
import AddButton from '@/widgets/Buttons/AddButton'

import {
  Wrapper,
  Hint,
  PlatformWrapper,
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
  const [showPlatformPool, togglePlatformPool] = useState(true)

  const list = ['Twitter', 'Weibo', 'Telegram']

  return (
    <Wrapper testid={testid}>
      <Label>社交账号</Label>
      <InputWrapper>
        <IconWrapper>
          <Icon.Telegram />
        </IconWrapper>
        <Inputer placeholder="twitter" />
      </InputWrapper>
      {showPlatformPool ? (
        <Hint>请选择社交平台:</Hint>
      ) : (
        <AddButton
          top={10}
          dimWhenIdle
          onClick={() => togglePlatformPool(true)}
        >
          添加
        </AddButton>
      )}

      {showPlatformPool && (
        <PlatformWrapper>
          {list.map((name) => {
            const SocialIcon = Icon[name]
            return <SocialIcon key={name} />
          })}
        </PlatformWrapper>
      )}

      {showPlatformPool && (
        <AddButton
          top={15}
          dimWhenIdle
          withIcon={false}
          onClick={() => togglePlatformPool(false)}
        >
          收起
        </AddButton>
      )}
    </Wrapper>
  )
}

export default memo(SocialEditor)
