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
  DeleteIcon,
  Inputer,
  Icon,
} from './styles/input_bar'
import { onCategoryDelete } from '@/containers/tool/CollectionFolder/logic'

/* eslint-disable-next-line */
const log = buildLog('c:SocialEditor:index')

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
      <DeleteIcon onClick={() => onDelete(social)} />
    </Wrapper>
  )
}

export default memo(InputBar)
