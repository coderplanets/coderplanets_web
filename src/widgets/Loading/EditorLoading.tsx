import { Fragment, FC, memo } from 'react'
import { range } from 'ramda'
import styled, { useTheme } from 'styled-components'
import ContentLoader from 'react-content-loader'

// Config-page: http://danilowoz.com/create-react-content-loader/
const LoadingWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin-left: 7%;
  margin-top: 2%;
`

const Loading = ({ theme }) => (
  <ContentLoader
    height={500}
    width={500}
    speed={2}
    primaryColor={theme.loading.basic}
    secondaryColor={theme.loading.animate}
  >
    <rect x="7.39" y="18" rx="4" ry="4" width="76" height="9.88" />
    <rect x="3" y="49" rx="5" ry="5" width="396" height="372" />
    <rect x="309.92" y="20.05" rx="0" ry="0" width="81" height="7.98" />
    <rect x="303.52" y="433.05" rx="0" ry="0" width="85.2" height="26" />
    <rect x="11.72" y="440.05" rx="0" ry="0" width="136.2" height="8" />
  </ContentLoader>
)

type TProps = {
  num?: number
}

const EditorLoading: FC<TProps> = ({ num = 1 }) => {
  const theme = useTheme()

  return (
    <Fragment>
      {range(0, num).map((item) => (
        <LoadingWrapper key={item}>
          <Loading theme={theme} />
        </LoadingWrapper>
      ))}
    </Fragment>
  )
}

export default memo(EditorLoading)
