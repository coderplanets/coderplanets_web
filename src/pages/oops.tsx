import { FC } from 'react'
import { Provider } from 'mobx-react'
import { useStore } from '@/stores/init'

import ErrorPage from '@/components/ErrorPage'
import ThemePalette from '@/containers/layout/ThemePalette'

const Oops: FC = () => {
  const store = useStore({})

  return (
    <Provider store={store}>
      <ThemePalette>
        <ErrorPage />
      </ThemePalette>
    </Provider>
  )
}

export default Oops
