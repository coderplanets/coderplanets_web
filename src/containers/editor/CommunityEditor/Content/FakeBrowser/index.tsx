import { FC, memo } from 'react'
import { isEmpty } from 'ramda'

import { ICON_CMD } from '@/config'

import Content from './Content'

import {
  Wrapper,
  Header,
  Tab,
  TabIcon,
  TabContent,
  AddressBar,
  ToolbarWrapper,
  ToolIcon,
  LockIcon,
  Form,
  Input,
  DomainText,
} from '../../styles/content/fake_browser'

type TProps = {
  domain?: string
  title?: string
  desc?: string
  showContent?: boolean
}

const FakeBrowser: FC<TProps> = ({
  domain = '',
  title = '',
  desc = '',
  showContent = false,
}) => {
  const tabTitle = title || domain || 'coderplanets'

  return (
    <Wrapper>
      <Header>
        <Tab>
          {title && <TabIcon />}
          <TabContent>{tabTitle}</TabContent>
        </Tab>
      </Header>
      <AddressBar>
        <ToolbarWrapper>
          <ToolIcon src={`${ICON_CMD}/new_community/back.svg`} />
        </ToolbarWrapper>
        <ToolbarWrapper>
          <ToolIcon src={`${ICON_CMD}/new_community/back.svg`} reverse />
        </ToolbarWrapper>
        <ToolbarWrapper>
          <ToolIcon src={`${ICON_CMD}/new_community/refresh.svg`} />
        </ToolbarWrapper>
        <Form>
          <ToolbarWrapper>
            <LockIcon src={`${ICON_CMD}/new_community/lock.svg`} />
          </ToolbarWrapper>
          <Input>
            {isEmpty(domain) ? (
              <div>coderplanets.com</div>
            ) : (
              <div>
                coderplanets.com/<DomainText>{domain.toLowerCase()}</DomainText>
              </div>
            )}
          </Input>
          <ToolbarWrapper>
            <ToolIcon src={`${ICON_CMD}/new_community/star.svg`} />
          </ToolbarWrapper>
        </Form>
        <ToolbarWrapper>
          <ToolIcon src={`${ICON_CMD}/new_community/more.svg`} />
        </ToolbarWrapper>
      </AddressBar>
      {showContent && <Content title={title} desc={desc} />}
    </Wrapper>
  )
}

export default memo(FakeBrowser)
