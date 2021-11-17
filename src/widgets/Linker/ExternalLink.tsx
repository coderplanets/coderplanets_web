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
        <Source href={src} target="_blank">
          <Tooltip
            content={<PopHint>{src}</PopHint>}
            placement="bottom"
            hideOnClick={false}
            noPadding
          >
            {cutRest(src, 28)}
          </Tooltip>
        </Source>
      )}
    </Fragment>
  )
}

export default memo(ExternalLink)
