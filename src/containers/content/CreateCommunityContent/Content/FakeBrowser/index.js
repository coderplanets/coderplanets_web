import React from 'react'
import T from 'prop-types'
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

const FakeBrowser = ({ domain, title, desc, showContent }) => {
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
              <div>https://coderplanets.com</div>
            ) : (
              <div>
                https://<DomainText>{domain}</DomainText>.coderplanets.com
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

FakeBrowser.propTypes = {
  domain: T.string,
  title: T.string,
  desc: T.string,
  showContent: T.bool,
}

FakeBrowser.defaultProps = {
  domain: '',
  title: '',
  desc: '',
  showContent: false,
}

export default React.memo(FakeBrowser)
