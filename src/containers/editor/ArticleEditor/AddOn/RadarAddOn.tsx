import { FC, memo, useState } from 'react'

import { isURL } from '@/utils/validator'

import type { TEditData } from '../spec'
import {
  Wrapper,
  LinkWrapper,
  LinkInput,
  LinkIcon,
} from '../styles/addon/radar_addon'
import { editOnChange } from '../logic'

type TProps = {
  editData: TEditData
}

const RadarAddOn: FC<TProps> = ({ editData }) => {
  const [invalid, setInvalid] = useState(false)

  return (
    <Wrapper>
      <LinkWrapper>
        <LinkIcon />
        <LinkInput
          invalid={invalid}
          value={editData.linkAddr}
          placeholder="消息源地址"
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
    </Wrapper>
  )
}

export default memo(RadarAddOn)
