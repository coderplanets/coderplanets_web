import React from 'react'
import T from 'prop-types'
import { range } from 'ramda'
import styled, { withTheme } from 'styled-components'
import ContentLoader from 'react-content-loader'

// Config-page: http://danilowoz.com/create-react-content-loader/
const LoadingWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`

const LoadingItem = ({ theme }) => (
  <ContentLoader
    height={100}
    width={400}
    speed={2}
    primaryColor={theme.loading.basic}
    secondaryColor={theme.loading.animate}
  >
    <rect x="25" y="16.05" rx="5" ry="5" width="363" height="8" />
    <rect x="25" y="46.05" rx="5" ry="5" width="358.0" height="8" />
    <rect x="25" y="75" rx="5" ry="5" width="355" height="8" />
    <rect x="25" y="16.05" rx="5" ry="5" width="363" height="8" />
    <rect x="25" y="46.05" rx="5" ry="5" width="358.0" height="8" />
    <rect x="25" y="75" rx="5" ry="5" width="355" height="8" />
  </ContentLoader>
)

const ArticleContentLoading = ({ num, theme }) =>
  range(0, num).map((item) => (
    <LoadingWrapper key={item}>
      <LoadingItem theme={theme} />
    </LoadingWrapper>
  ))

ArticleContentLoading.propTypes = {
  num: T.number,
}

ArticleContentLoading.defaultProps = {
  num: 1,
}

export default withTheme(ArticleContentLoading)
