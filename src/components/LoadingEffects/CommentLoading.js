import React from 'react'
import styled, { useTheme } from 'styled-components'
import ContentLoader from 'react-content-loader'

// Config-page: http://danilowoz.com/create-react-content-loader/
const LoadingWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`

const CommentLoading = () => {
  const theme = useTheme()

  return (
    <LoadingWrapper>
      <ContentLoader
        height={60}
        width={400}
        speed={2}
        primaryColor={theme.loading.basic}
        secondaryColor={theme.loading.animate}
      >
        <rect x="35" y="6" rx="4" ry="4" width="117" height="5.25" />
        <rect x="37" y="20" rx="3" ry="3" width="85" height="5.25" />
        <rect x="37" y="37.68" rx="3" ry="3" width="318.5" height="4.6" />
        <rect x="37" y="51" rx="3" ry="3" width="319.2" height="5.11" />
        <rect x="71" y="104" rx="3" ry="3" width="201" height="6.4" />
        <circle cx="14.0" cy="14.0" r="14.0" />
      </ContentLoader>
    </LoadingWrapper>
  )
}

export default CommentLoading
