import { FC, Fragment, memo } from 'react'

import { cutRest } from '@/utils/helper'
import { LinkIcon, Source } from './styles/internal_link'

type TProps = {
  src: string
  text: string
  openInNewTab: boolean
}

const InternalLink: FC<TProps> = ({ src, text, openInNewTab }) => {
  const target = openInNewTab ? '_blank' : '_self'

  return (
    <Fragment>
      <Source href={src} target={target}>
        {cutRest(text, 10)}
      </Source>
      <LinkIcon />
    </Fragment>
  )
}

export default memo(InternalLink)
