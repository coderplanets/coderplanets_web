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
    height={80}
    width={500}
    speed={2}
    primaryColor={theme.loading.basic}
    secondaryColor={theme.loading.animate}
  >
    <rect x="13" y="10.69" rx="4" ry="4" width="183" height="8.64" />
    <rect x="13" y="29.22" rx="4" ry="4" width="401.3464" height="5.2" />
    <rect x="13" y="43.2" rx="4" ry="4" width="331.58" height="5.2" />
    <rect x="283.02" y="141.21" rx="4" ry="4" width="86.5" height="9.76" />
    <rect x="433" y="12.2" rx="0" ry="0" width="60" height="5.6" />
    <rect x="13" y="58.2" rx="0" ry="0" width="137" height="6.5" />
  </ContentLoader>
)

const RepoItemLoading = ({ num, theme }) =>
  range(0, num).map(item => (
    <LoadingWrapper key={item}>
      <LoadingItem theme={theme} />
    </LoadingWrapper>
  ))

RepoItemLoading.propTypes = {
  num: T.number,
}

RepoItemLoading.defaultProps = {
  num: 1,
}

export default withTheme(RepoItemLoading)
