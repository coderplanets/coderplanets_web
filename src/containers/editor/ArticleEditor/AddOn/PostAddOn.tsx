import { FC, memo, useState, useEffect } from 'react'

import { isURL } from '@/utils/validator'
import Checker from '@/widgets/Checker'

import type { TEditData } from '../spec'
import {
  Wrapper,
  LinkWrapper,
  LinkInput,
  LinkIcon,
} from '../styles/addon/post_addon'
import { editOnChange } from '../logic'

type TProps = {
  editData: TEditData
}

const PostAddOn: FC<TProps> = ({ editData }) => {
  const [reprint, setReprint] = useState(false)
  const [invalid, setInvalid] = useState(false)

  useEffect(() => {
    if (!!editData.linkAddr) {
      setReprint(true)
    }
  }, [])

  return (
    <Wrapper>
      <Checker
        checked={reprint}
        size="small"
        dimWhenIdle
        onChange={(checked) => {
          setReprint(checked)
          if (!checked) editOnChange('', 'linkAddr')
        }}
      >
        转载 / 翻译
      </Checker>

      {reprint && (
        <LinkWrapper>
          <LinkIcon />
          <LinkInput
            invalid={invalid}
            value={editData.linkAddr}
            placeholder="原文地址"
            onChange={(v) => {
              if (!isURL(v.target.value)) {
                setInvalid(true)
              } else {
                setInvalid(false)
              }

              editOnChange(v, 'linkAddr')
            }}
            autoFocus
          />
        </LinkWrapper>
      )}
    </Wrapper>
  )
}

export default memo(PostAddOn)
