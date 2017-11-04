import React from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-component'
import R from 'ramda'
import shortid from 'shortid'
import { withTheme } from 'styled-components'

// import Loading, { Rect, Circle } from 'react-content-loader'
import Loading from 'react-content-loader'

import { makeDebugger } from '../../utils/functions'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:LoadingEffects:index')
/* eslint-enable no-unused-vars */

const LoadingBlock = ({ theme }) => (
  <div
    style={{
      width: 450,
      height: 450,
      padding: 20,
      paddingTop: 40,
    }}
  >
    <Loading
      type="list"
      width={250}
      height={100}
      primaryColor={theme.loading.basic}
      secondaryColor={theme.loading.animate}
    />
    <Loading
      type="code"
      width={250}
      height={100}
      primaryColor={theme.loading.basic}
      secondaryColor={theme.loading.animate}
    />
  </div>
)

const CheatSheetLoading = ({ column, theme }) => (
  <Masonry>
    {R.range(0, column).map(() => (
      <LoadingBlock key={shortid.generate()} theme={theme} />
    ))}
  </Masonry>
)

CheatSheetLoading.propTypes = {
  column: PropTypes.number,
}

CheatSheetLoading.defaultProps = {
  column: 2,
}

export default withTheme(CheatSheetLoading)
