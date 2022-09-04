/*
 *
 * SocialEditor
 *
 */

import { FC, memo } from 'react'

import type { TSocial } from '@/spec'
import { buildLog } from '@/utils/logger'

import {
  Wrapper,
  IconWrapper,
  DeleteWrapper,
  DeleteIcon,
  Inputer,
  Icon,
} from './styles/input_bar'

/* eslint-disable-next-line */
const log = buildLog('w:SocialEditor:index')

type TProps = {
  social: TSocial
  onDelete: (social: TSocial) => void
}

const InputBar: FC<TProps> = ({ social, onDelete }) => {
  const SocalIcon = Icon[social.raw]

  return (
    <Wrapper>
      <IconWrapper>
        <SocalIcon $active />
      </IconWrapper>
      <Inputer placeholder={social.title} />
      <DeleteWrapper onClick={() => onDelete(social)}>
        <DeleteIcon />
      </DeleteWrapper>
    </Wrapper>
  )
}

export default memo(InputBar)
