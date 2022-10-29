import ThemePalette from '@/containers/layout/ThemePalette'
import OauthHinter from '@/widgets/OauthHinter'

import { useStore } from '@/stores/init'

const OAuthPage = (props) => {
  const store = useStore()
  store.mark(props)

  return (
    <ThemePalette>
      <OauthHinter />
    </ThemePalette>
  )
}

export default OAuthPage
