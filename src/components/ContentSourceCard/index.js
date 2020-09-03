/*
 *
 * ContentSourceCard
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'
import { useMedia } from '@/hooks'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

/* eslint-disable-next-line */
const log = buildLog('c:ContentSourceCard:index')

const ContentSourceCard = (props) => {
  const { mobile } = useMedia()

  return (
    <React.Fragment>
      {!mobile ? <DesktopView {...props} /> : <MobileView {...props} />}
    </React.Fragment>
  )
}

ContentSourceCard.propTypes = {
  data: T.shape({
    communities: T.arrayOf(
      T.shape({
        id: T.string,
        title: T.string,
        logo: T.string,
        raw: T.string,
      }),
    ),
    pagedCommentsParticipators: T.shape({
      entries: T.array,
      totalCount: T.number,
    }),
    tags: T.arrayOf(
      T.shape({
        id: T.string,
        title: T.string,
        color: T.string,
        raw: T.string,
      }),
    ),
  }),
}

ContentSourceCard.defaultProps = {
  data: {
    communities: [],
    tags: [],
    pagedCommentsParticipators: {
      entries: [],
      totalCount: 0,
    },
  },
}

export default React.memo(ContentSourceCard)
