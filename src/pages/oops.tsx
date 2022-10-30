import { FC } from 'react'

import ErrorPage from '@/widgets/ErrorPage'
import ThemePalette from '@/containers/layout/ThemePalette'

const Oops: FC = () => {
  return (
    <ThemePalette>
      <ErrorPage />
    </ThemePalette>
  )
}

export default Oops
