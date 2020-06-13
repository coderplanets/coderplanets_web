import React from 'react'
import T from 'prop-types'
import { range } from 'ramda'
import styled, { useTheme } from 'styled-components'
import ContentLoader from 'react-content-loader'

// Config-page: http://danilowoz.com/create-react-content-loader/
const LoadingWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`

const LoadingItem = ({ theme }) => (
  <ContentLoader
    height={100}
    width={500}
    speed={2}
    primaryColor={theme.loading.basic}
    secondaryColor={theme.loading.animate}
  >
    <rect x="168" y="9.69" rx="4" ry="4" width="183" height="8.0" />
    <rect x="168" y="46.28" rx="4" ry="4" width="269.36" height="5.0" />
    <rect x="5" y="5.38" rx="5" ry="1" width="151.5" height="86.0194" />
    <rect x="168" y="28.2" rx="4" ry="4" width="140.5" height="6.0" />
    <rect x="283.02" y="141.21" rx="4" ry="4" width="86.5" height="9.76" />
    <circle cx="175.31" cy="79.07" r="8.313" />
    <rect x="190" y="77.2" rx="0" ry="0" width="60" height="4" />
  </ContentLoader>
)

const VideoItemLoading = ({ num }) => {
  const theme = useTheme()

  return range(0, num).map((item) => (
    <LoadingWrapper key={item}>
      <LoadingItem theme={theme} />
    </LoadingWrapper>
  ))
}

VideoItemLoading.propTypes = {
  num: T.number,
}

VideoItemLoading.defaultProps = {
  num: 1,
}

export default VideoItemLoading
