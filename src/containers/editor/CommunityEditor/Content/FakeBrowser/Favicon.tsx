import { FC, memo } from 'react'

import { HolderIcon, RealIcon } from '../../styles/content/fake_browser/favicon'

type TProps = {
  title: string
  logo: string | null
}

const FaviconIcon: FC<TProps> = ({ title, logo }) => {
  if (logo) return <RealIcon src={logo} />
  if (title) return <HolderIcon />

  return null
}

export default memo(FaviconIcon)
