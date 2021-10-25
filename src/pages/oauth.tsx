import { Provider } from 'mobx-react'

import ThemePalette from '@/containers/layout/ThemePalette'
import OauthHinter from '@/widgets/OauthHinter'

import { useStore } from '@/stores/init'

const OAuthPage = (props) => {
  const store = useStore(props)

  return (
    <Provider store={store}>
      <ThemePalette>
        <OauthHinter />
      </ThemePalette>
    </Provider>
  )
}

export default OAuthPage
