import { FC, Fragment, memo } from 'react'

import { cutRest } from '@/utils/helper'
import { Hint, LinkIcon, Source, PopHint } from './styles/external_link'
import Tooltip from '@/widgets/Tooltip'

type TProps = {
  src: string
  hint?: string | null
  plainColor: boolean
  maxLength: number
}

const ExternalLink: FC<TProps> = ({ src, hint, plainColor, maxLength }) => {
  const displayLimit = maxLength
  if (!src) return null

  return (
    <Fragment>
      {hint && <Hint>{hint}</Hint>}
      <LinkIcon />
      {src.length < displayLimit ? (
        <Source href={src} target="_blank" plainColor={plainColor}>
          {cutRest(src, displayLimit + 3)}
        </Source>
      ) : (
        <Source href={src} target="_blank" plainColor={plainColor}>
          <Tooltip
            content={<PopHint>{src}</PopHint>}
            placement="bottom"
            hideOnClick={false}
            noPadding
          >
            {cutRest(src, displayLimit + 3)}
          </Tooltip>
        </Source>
      )}
    </Fragment>
  )
}

export default memo(ExternalLink)
