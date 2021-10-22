import { FC, memo, useState, useCallback } from 'react'

import { isURL } from '@/utils/validator'
import { SpaceGrow } from '@/widgets/Common'
import Checker from '@/widgets/Checker'

import Menu from '../Menu'

import { Wrapper, LinkWrapper, LinkInput, ErrorHint } from '../styles/options'

type TProps = {
  onLinkChange: (link: string) => void
}

const Header: FC<TProps> = ({ onLinkChange }) => {
  const [reprint, setReprint] = useState(false)
  const [invalid, setInvalid] = useState(false)

  return (
    <Wrapper>
      <Checker checked={reprint} size="small" dimWhenIdle onChange={setReprint}>
        转载 / 翻译
      </Checker>

      {reprint && (
        <LinkWrapper>
          <LinkInput
            placeholder="原文地址"
            onChange={(v) => {
              console.log('v.target.value: ', v.target.value)
              console.log('isURL: ', isURL(v.target.value))

              if (!isURL(v.target.value)) {
                setInvalid(true)
              } else {
                setInvalid(false)
              }

              onLinkChange(v)
            }}
            autoFocus
          />
          {invalid && <ErrorHint>无效地址</ErrorHint>}
        </LinkWrapper>
      )}

      <SpaceGrow />
      <Menu />
    </Wrapper>
  )
}

export default memo(Header)
