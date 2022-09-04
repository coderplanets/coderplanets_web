/*
 *
 * SocialEditor
 *
 */

import { FC, memo, useState, useCallback } from 'react'

import { includes, reject } from 'ramda'

import type { TSocial } from '@/spec'
import { SOCIAL_LIST } from '@/constant'
import { buildLog } from '@/utils/logger'
import AddButton from '@/widgets/Buttons/AddButton'

import InputBar from './InputBar'

import {
  Wrapper,
  Hint,
  PlatformWrapper,
  InputsWrapper,
  Label,
  Icon,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:SocialEditor:index')

type TProps = {
  testid?: string
}

const SocialEditor: FC<TProps> = ({ testid = 'social-editor' }) => {
  const [showPlatformPool, togglePlatformPool] = useState(false)
  const [selected, setSelected] = useState([])

  const remove = useCallback(
    (social) => {
      const after: TSocial[] = reject(
        (item: TSocial) => item.raw === social.raw,
        selected,
      )
      setSelected(after)
    },
    [selected],
  )

  return (
    <Wrapper testid={testid}>
      <Label>社交账号</Label>

      <InputsWrapper>
        {selected.map((item) => (
          <InputBar
            key={item?.raw}
            social={item}
            onDelete={(social) => remove(social)}
          />
        ))}
      </InputsWrapper>

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
          {SOCIAL_LIST.map((social) => {
            const SocialIcon = Icon[social.raw]

            return (
              <SocialIcon
                key={social.raw}
                $active={includes(social, selected)}
                onClick={() => {
                  if (!includes(social, selected)) {
                    setSelected([...selected, social])
                  }
                }}
              />
            )
          })}
        </PlatformWrapper>
      )}

      {showPlatformPool && (
        <AddButton
          top={15}
          left={2}
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
