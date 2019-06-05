import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import { withTheme } from 'styled-components'

import ContentLoader from 'react-content-loader'

import { buildLog, uid } from '@utils'
import { Wrapper, CheatsheetCard } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:LoadingEffects:index')

const LoadingBlock = ({ theme }) => (
  <CheatsheetCard>
    <ContentLoader
      height={200}
      width={280}
      speed={2}
      primaryColor={theme.loading.basic}
      secondaryColor={theme.loading.animate}
    >
      <rect x="0" y="0" rx="3" ry="3" width="70" height="10" />
      <rect x="80" y="0" rx="3" ry="3" width="100" height="10" />
      <rect x="190" y="0" rx="3" ry="3" width="10" height="10" />
      <rect x="15" y="20" rx="3" ry="3" width="130" height="10" />
      <rect x="155" y="20" rx="3" ry="3" width="130" height="10" />
      <rect x="15" y="40" rx="3" ry="3" width="90" height="10" />
      <rect x="115" y="40" rx="3" ry="3" width="60" height="10" />
      <rect x="185" y="40" rx="3" ry="3" width="60" height="10" />
      <rect x="0" y="60" rx="3" ry="3" width="30" height="10" />
    </ContentLoader>
  </CheatsheetCard>
)

const CheatSheetLoading = ({ column, theme }) => (
  <Wrapper>
    {R.range(0, column).map(() => (
      <LoadingBlock key={uid.gen()} theme={theme} />
    ))}
  </Wrapper>
)

CheatSheetLoading.propTypes = {
  column: PropTypes.number,
  theme: PropTypes.object.isRequired,
}

CheatSheetLoading.defaultProps = {
  column: 4,
}

export default withTheme(CheatSheetLoading)
