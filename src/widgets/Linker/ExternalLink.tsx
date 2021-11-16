import { FC, Fragment, memo } from 'react'

import { cutRest } from '@/utils/helper'
import { Hint, LinkIcon, Source, PopHint } from './styles/external_link'
import Tooltip from '@/widgets/Tooltip'

type TProps = {
  src: string
  hint?: string | null
}

const ExternalLink: FC<TProps> = ({ src, hint }) => {
  const displayLimit = 25

  return (
    <Fragment>
      {hint && <Hint>{hint}</Hint>}
      <LinkIcon />
      {src.length < displayLimit ? (
        <Source href={src} target="_blank">
          {cutRest(src, 28)}
        </Source>
      ) : (
        <Tooltip
          content={<PopHint>{src}</PopHint>}
          placement="bottom"
          hideOnClick={false}
          noPadding
        >
          <Source href={src} target="_blank">
            {cutRest(src, 28)}
          </Source>
        </Tooltip>
      )}
    </Fragment>
  )
}

export default memo(ExternalLink)
