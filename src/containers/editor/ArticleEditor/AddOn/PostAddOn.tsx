import { FC, memo, useState } from 'react'

import { isURL } from '@/utils/validator'
import Checker from '@/widgets/Checker'

import {
  Wrapper,
  LinkWrapper,
  LinkInput,
  ErrorHint,
} from '../styles/addon/post_addon'

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
    </Wrapper>
  )
}

export default memo(Header)
