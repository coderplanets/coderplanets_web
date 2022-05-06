import { FC, memo, Fragment, useState } from 'react'

import CopyButton from '@/widgets/Buttons/CopyButton'
import type { TLinksData } from '../spec'

import {
  Header,
  TabWrapper,
  TabName,
  BoxWrapper,
  Inputer,
} from '../styles/panel/link_board'

type TProps = {
  linksData: TLinksData
}

const LinkBoard: FC<TProps> = ({ linksData }) => {
  const [activeTab, setActiveTab] = useState('link')

  return (
    <Fragment>
      <Header>
        <TabWrapper>
          <TabName
            $active={activeTab === 'link'}
            onClick={() => setActiveTab('link')}
          >
            URL
          </TabName>
          <TabName
            $active={activeTab === 'html'}
            onClick={() => setActiveTab('html')}
          >
            HTML
          </TabName>
          <TabName
            $active={activeTab === 'md'}
            onClick={() => setActiveTab('md')}
          >
            MD
          </TabName>
          <TabName
            $active={activeTab === 'orgMode'}
            onClick={() => setActiveTab('orgMode')}
          >
            OrgMode
          </TabName>
        </TabWrapper>
        <CopyButton value={linksData[activeTab]} />
      </Header>
      <BoxWrapper>
        <Inputer value={linksData[activeTab]} />
      </BoxWrapper>
    </Fragment>
  )
}

export default memo(LinkBoard)
