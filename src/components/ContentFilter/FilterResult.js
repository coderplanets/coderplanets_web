import React from 'react'

import { EVENT, TYPE } from '@constant'
import { ICON_CMD } from '@config'
import { send } from '@utils'

import Tooltip from '@components/Tooltip'

import {
  Wrapper,
  ResultText,
  ResultDivider,
  MoreOptionWrapper,
  FaqText,
  SettingIcon,
} from './styles/filter_result'

const FilterResult = ({ totalCount, onFaqChange, faqActive }) => {
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

        <div
          onClick={() =>
            send(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_C11N_SETINGS })
          }
        >
          <SettingIcon src={`${ICON_CMD}/view_setting.svg`} />
        </div>
      </MoreOptionWrapper>
    </Wrapper>
  )
}

export default React.memo(FilterResult)
