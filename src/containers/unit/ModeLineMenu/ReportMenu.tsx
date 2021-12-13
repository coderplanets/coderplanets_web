import { FC, memo } from 'react'

import AbuseReport from '@/containers/tool/AbuseReport'

import { Wrapper } from './styles/share_menu'

const ReportMenu: FC = () => {
  return (
    <Wrapper>
      <AbuseReport />
    </Wrapper>
  )
}

export default memo(ReportMenu)
