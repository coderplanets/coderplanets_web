/*
 *
 * RepoItem
 *
 */

import React from 'react'
import T from 'prop-types'

import { cutRest } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import Header from './Header'
import Footer from './Footer'

import { Wrapper, BodyDigest } from './styles'
import { getOpacity } from './helper'

/* eslint-disable-next-line */
const log = buildLog('w:RepoItem:index')

const RepoItem = ({ entry, active, onPreview, accountInfo }) => (
  <Wrapper opacity={getOpacity(entry, active, accountInfo)}>
    <Header entry={entry} onPreview={() => onPreview(entry)} />
    <BodyDigest>{cutRest(entry.desc, 180)}</BodyDigest>
    <Footer
      contributors={entry.contributors}
      author={entry.author}
      insertedAt={entry.insertedAt}
    />
  </Wrapper>
)

RepoItem.propTypes = {
  active: T.object,

  entry: T.shape({
    title: T.string,
    desc: T.string,
    views: T.number,
    insertedAt: T.string,
    contributors: T.any, // TODO:

    author: T.shape({
      nickname: T.string,
      avatar: T.string,
    }),
  }).isRequired,

  accountInfo: T.shape({
    isLogin: T.bool,
    customization: T.shape({
      markViewed: T.bool,
      displayDensity: T.oneOf(['20', '25', '30']),
    }),
  }),
  onPreview: T.func,
}

RepoItem.defaultProps = {
  onPreview: log,
  active: {},
  accountInfo: {
    isLogin: false,
    customization: T.shape({
      markViewed: true,
      displayDensity: '20',
    }),
  },
}

export default React.memo(RepoItem)
