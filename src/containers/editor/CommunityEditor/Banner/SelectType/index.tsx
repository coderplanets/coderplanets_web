/*
 *
 * CommunitiesBanner
 *
 */

import { FC, memo } from 'react'

import { ICON_CMD } from '@/config'
import { SIZE } from '@/constant'
import { buildLog } from '@/utils/logger'

import ArrowButton from '@/widgets/Buttons/ArrowButton'

import type { TCommunityType, TValidState } from '../../spec'
import TypeBoxes from './TypeBoxes'

import {
  Wrapper,
  IntroTitle,
  AddNewIcon,
  NextBtn,
  ErrorMsg,
  InfoMsg,
} from '../../styles/banner/select_type'
import { nextStep } from '../../logic'

/* eslint-disable-next-line */
const log = buildLog('C:CommunitiesBanner')

type TProps = {
  status: {
    communityType: TCommunityType
  }
  validState: TValidState
}

const SelectType: FC<TProps> = ({ status: { communityType }, validState }) => {
  return (
    <Wrapper>
      <IntroTitle>
        <AddNewIcon src={`${ICON_CMD}/community_new.svg`} />
        你想创建一个什么类型的子社区?
      </IntroTitle>
      <TypeBoxes communityType={communityType} />

      {communityType && (
        <NextBtn>
          {!validState.hasPendingApply && !validState.isLogin && (
            <ErrorMsg>创建社区需要先登录</ErrorMsg>
          )}
          {validState.isLogin && validState.hasPendingApply && (
            <InfoMsg>
              你上次申请的创建请求还在处理中，请等待处理后再次创建，谢谢!
            </InfoMsg>
          )}

          {!validState.hasPendingApply && (
            <ArrowButton
              size={SIZE.MEDIUM}
              onClick={nextStep}
              disabled={!validState.isCommunityTypeValid}
            >
              下一步
            </ArrowButton>
          )}
        </NextBtn>
      )}
    </Wrapper>
  )
}

export default memo(SelectType)
