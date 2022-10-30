import { Fragment, FC, memo } from 'react'
import { range } from 'ramda'
import styled, { useTheme } from 'styled-components'
import ContentLoader from 'react-content-loader'

import css from '@/utils/css'

// Config-page: http://danilowoz.com/create-react-content-loader/
const LoadingWrapper = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 26px;
  overflow: hidden;
  ${css.media.mobile`
    height: 45px;
    margin-bottom: 10px;
  `};
`

const LoadingItem = ({ theme }) => (
  <ContentLoader
    height={70}
    width={500}
    speed={2}
    backgroundColor={theme.loading.basic}
    // primaryColor={theme.loading.basic}
    // secondaryColor={theme.loading.animate}
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

type TProps = {
  num?: number
}

const PostItemLoading: FC<TProps> = ({ num = 1 }) => {
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

export default memo(PostItemLoading)
