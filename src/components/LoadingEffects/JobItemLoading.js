import React from 'react'
import R from 'ramda'
import T from 'prop-types'
import styled, { withTheme } from 'styled-components'
import ContentLoader from 'react-content-loader'

// Config-page: http://danilowoz.com/create-react-content-loader/
const LoadingWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`

const LoadingItem = ({ theme }) => (
  <ContentLoader
    height={63}
    width={500}
    speed={2}
    primaryColor={theme.loading.basic}
    secondaryColor={theme.loading.animate}
  >
    <rect x="283.02" y="141.21" rx="4" ry="4" width="86.5" height="9" />
    <rect x="6" y="7.2" rx="0" ry="0" width="205" height="9" />
    <rect x="6" y="26.2" rx="0" ry="0" width="89" height="8" />
    <rect x="105" y="28.2" rx="0" ry="0" width="81" height="7" />
    <rect x="6" y="43.2" rx="0" ry="0" width="197" height="7" />
    <rect x="283" y="7.25" rx="0" ry="0" width="136.8" height="8.52" />
    <rect x="283" y="41.2" rx="0" ry="0" width="98.28" height="7.99" />
    <rect x="457.36" y="8.2" rx="0" ry="0" width="38.68" height="37.84" />
    <rect x="283" y="24.2" rx="0" ry="0" width="34" height="8.58" />
    <rect x="327.44" y="24.2" rx="0" ry="0" width="27" height="8.58" />
    <rect x="364.44" y="24.2" rx="0" ry="0" width="34" height="8.58" />
  </ContentLoader>
)

const JobItemLoading = ({ num, theme }) =>
  R.range(0, num).map(item => (
    <LoadingWrapper key={item}>
      <LoadingItem theme={theme} />
    </LoadingWrapper>
  ))

JobItemLoading.propTypes = {
  num: T.number,
}

JobItemLoading.defaultProps = {
  num: 1,
}

export default withTheme(JobItemLoading)
