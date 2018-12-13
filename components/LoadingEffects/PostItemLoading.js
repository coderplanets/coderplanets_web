import React from 'react'
import R from 'ramda'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import ContentLoader from 'react-content-loader'

import { uid } from '../../utils'

// Config-page: http://danilowoz.com/create-react-content-loader/
const LoadingWrapper = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 26px;
  overflow: hidden;
`

const LoadingItem = ({ theme }) => (
  <ContentLoader
    height={70}
    width={500}
    speed={2}
    primaryColor={theme.loading.basic}
    secondaryColor={theme.loading.animate}
  >
    <rect x="38" y="5.58" rx="4" ry="4" width="195.55" height="8.69" />
    <rect x="38" y="19.93" rx="3" ry="3" width="130.05" height="5.36" />
    <rect x="38" y="35.16" rx="3" ry="3" width="454.96" height="6.05" />
    <circle cx="16.8" cy="19" r="15" />
    <circle cx="449" cy="14" r="8" />
    <circle cx="467" cy="14" r="8" />
    <circle cx="485" cy="14" r="8" />
  </ContentLoader>
)

const PostItemLoading = ({ num, theme }) =>
  R.range(0, num).map(() => (
    <LoadingWrapper key={uid.gen()}>
      <LoadingItem uniquekey={uid.gen()} theme={theme} />
    </LoadingWrapper>
  ))

PostItemLoading.propTypes = {
  num: PropTypes.number,
}

PostItemLoading.defaultProps = {
  num: 1,
}

export default withTheme(PostItemLoading)
