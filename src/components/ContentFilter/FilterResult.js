import React from 'react'

import { ICON_CMD } from '@config'

import Tooltip from '@components/Tooltip'

import {
  Wrapper,
  ResultText,
  ResultDivider,
  MoreOptionWrapper,
  FaqText,
  SettingIcon,
} from './styles/filter_result'

import SettingMenu from './SettingMenu'

const FilterResult = ({
  thread,
  totalCount,
  customization,
  onC11NChange,
  onFaqChange,
  faqActive,
}) => {
  return (
    <Wrapper>
      <ResultText>结果共 {totalCount} 条</ResultText>
      <ResultDivider />

      <MoreOptionWrapper>
        {faqActive ? (
          <FaqText active={faqActive} onClick={onFaqChange}>
            FAQ
          </FaqText>
        ) : (
          <Tooltip content="常见问题" placement="bottom" delay={300}>
            <FaqText active={faqActive} onClick={onFaqChange}>
              FAQ
            </FaqText>
          </Tooltip>
        )}

        <ResultDivider />

        <Tooltip
          placement="bottom-end"
          trigger="click"
          content={
            <SettingMenu
              thread={thread}
              customization={customization}
              onC11NChange={onC11NChange}
            />
          }
        >
          <div>
            <SettingIcon src={`${ICON_CMD}/view_setting.svg`} />
          </div>
        </Tooltip>
      </MoreOptionWrapper>
    </Wrapper>
  )
}

export default React.memo(FilterResult)
