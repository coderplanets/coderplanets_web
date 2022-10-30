import { FC, memo } from 'react'
import { range } from 'ramda'
import ContentLoader from 'react-content-loader'
import { useTheme } from 'styled-components'

import { buildLog } from '@/utils/logger'
import { Wrapper, CheatsheetCard } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:Loading:index')

const LoadingBlock = ({ theme }) => (
  <CheatsheetCard>
    <ContentLoader
      height={200}
      width={280}
      speed={2}
      backgroundColor={theme.loading.basic}
      // primaryColor={theme.loading.basic}
      // secondaryColor={theme.loading.animate}
    >
      <rect x="0" y="0" rx="3" ry="3" width="70" height="10" />
      <rect x="80" y="0" rx="3" ry="3" width="100" height="10" />
      <rect x="190" y="0" rx="3" ry="3" width="10" height="10" />
      <rect x="15" y="20" rx="3" ry="3" width="130" height="10" />
      <rect x="155" y="20" rx="3" ry="3" width="130" height="10" />
      <rect x="15" y="40" rx="3" ry="3" width="90" height="10" />
      <rect x="115" y="40" rx="3" ry="3" width="60" height="10" />
      <rect x="185" y="40" rx="3" ry="3" width="60" height="10" />
      <rect x="0" y="60" rx="3" ry="3" width="30" height="10" />
    </ContentLoader>
  </CheatsheetCard>
)

type TProps = {
  column: number
}

const CheatSheetLoading: FC<TProps> = ({ column = 4 }) => {
  const theme = useTheme()

  return (
    <Wrapper>
      {range(0, column).map((item) => (
        <LoadingBlock key={item} theme={theme} />
      ))}
    </Wrapper>
  )
}

export default memo(CheatSheetLoading)
