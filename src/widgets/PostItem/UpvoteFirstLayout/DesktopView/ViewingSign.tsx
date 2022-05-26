import { FC, memo } from 'react'

import type { TPost } from '@/spec'
import useViewing from '@/hooks/useViewing'

import {
  Wrapper,
  ViewIcon,
} from '../../styles/upvote_fist_layout/desktop_view/viewing_sign'

type TProps = {
  article: TPost
}

const ViewingSign: FC<TProps> = ({ article }) => {
  const viewingId = useViewing()

  if (article.id !== viewingId) return null

  return (
    <Wrapper>
      <ViewIcon />
    </Wrapper>
  )
}

export default memo(ViewingSign)
