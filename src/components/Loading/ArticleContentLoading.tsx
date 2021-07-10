import { Fragment, FC, memo } from 'react'
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

type TProps = {
  num?: number
}

const ArticleContentLoading: FC<TProps> = ({ num = 1 }) => {
  const theme = useTheme()

  return (
    <Fragment>
      {range(0, num).map((item) => (
        <LoadingWrapper key={item}>
          <LoadingItem theme={theme} />
        </LoadingWrapper>
      ))}
    </Fragment>
  )
}

export default memo(ArticleContentLoading)
