import React from 'react'
import T from 'prop-types'
import R from 'ramda'

import { ICON_CMD } from '@config'

import {
  Wrapper,
  Header,
  Tab,
  TabContent,
  AddressBar,
  ToolbarWrapper,
  ToolIcon,
  LockIcon,
  Form,
  Input,
  DomainText,
} from '../styles/content/fake_browser'

const FakeBrowser = ({ domain, title }) => {
  const tabTitle = title || domain || 'coderplanets'

  return (
    <Wrapper>
      <Header>
        <Tab>
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
            {R.isEmpty(domain) ? (
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
    </Wrapper>
  )
}

FakeBrowser.propTypes = {
  domain: T.string,
  title: T.string,
}

FakeBrowser.defaultProps = {
  domain: '',
  title: '',
}

export default React.memo(FakeBrowser)
