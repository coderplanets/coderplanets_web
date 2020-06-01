import React from 'react'
import T from 'prop-types'
import { range } from 'ramda'
import styled from 'styled-components'
import ContentLoader from 'react-content-loader'

// Config-page: http://danilowoz.com/create-react-content-loader/
const LoadingWrapper = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  margin-left: -2px;
  overflow: hidden;
`

const LoadingItem = () => (
  <ContentLoader
    height={100}
    width={200}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <circle cx="10.44" cy="15.44" r="9.44" />
    <rect x="27" y="9.28" rx="0" ry="0" width="123" height="12" />
  </ContentLoader>
)

const TagListLoading = ({ num }) => {
  return range(0, num).map(item => (
    <LoadingWrapper key={item}>
      <LoadingItem />
    </LoadingWrapper>
  ))
}

TagListLoading.propTypes = {
  num: T.number,
}

TagListLoading.defaultProps = {
  num: 1,
}

export default React.memo(TagListLoading)
