import { FC, memo } from 'react'
import { filter, includes } from 'ramda'

import type { TSelectOption, TUser } from '@/spec'

import Checker from '@/widgets/Checker'
import Select from '@/widgets/Select'
import Button from '@/widgets/Buttons/Button'
import { Space, Br } from '@/widgets/Common'
import TeamList from '@/widgets/TeamList'

import type { TInputData } from '../../spec'
import { PROFIT_MODE, WORKING_MODE } from '../../constant'

import CoverUploader from './CoverUploader'
import ContactField from './ContactField'

import {
  Wrapper,
  Section,
  Label,
  TeamsWrapper,
  CheckWrapper,
  Hint,
  Input,
  SelectWrapper,
  SectionHint,
} from '../../styles/content/basic_info_part'

import {
  inputOnChange,
  checkerOnChange,
  addSocial,
  citiesOnChange,
  searchUser,
  addTeammate,
  removeTeammate,
  closeSearchedUsers,
} from '../../logic'

const cityOptions = [
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'guangzhou', label: '广州' },
  { value: 'shenzhen', label: '深圳' },
  { value: 'hangzhou', label: '杭州' },
  { value: 'nanjing', label: '南京' },
  { value: 'chengdu', label: '成都' },
  { value: 'wuhan', label: '武汉' },
  { value: 'changsha', label: '长沙' },
  { value: 'suzhou', label: '苏州' },
  { value: 'xian', label: '西安' },
  { value: 'oversea', label: '海外' },
  { value: 'others', label: '其他' },
]

type TProps = {
  inputData: TInputData
  socialOptions: TSelectOption[]
  searchedUsers: TUser[]
}

const BasicInfoPart: FC<TProps> = ({
  inputData,
  socialOptions,
  searchedUsers,
}) => {
  const {
    cover,
    title,
    homeLink,
    desc,
    socialInfo,
    workingMode,
    profitMode,
    cities,
    teammates,
  } = inputData

  return (
    <Wrapper>
      <Section>
        <CoverUploader cover={cover} />
      </Section>
      <Section>
        <Label>主页地址</Label>
        <Input
          value={homeLink}
          placeholder={`// ${title} 官方网址`}
          onChange={(e) => inputOnChange(e, 'homeLink')}
        />
      </Section>
      <Section>
        <Label>一句话描述</Label>
        <Input
          value={desc}
          placeholder={`// 一句话描述 ${title}`}
          onChange={(e) => inputOnChange(e, 'desc')}
        />
      </Section>
      <Section>
        <Label>
          <div>联系渠道</div>
          <Button size="tiny" ghost noBorder onClick={addSocial}>
            添加
          </Button>
        </Label>
        <SelectWrapper>
          <ContactField socialInfo={socialInfo} socialOptions={socialOptions} />
        </SelectWrapper>
      </Section>
      <Section>
        <Label>主要盈利</Label>
        <CheckWrapper>
          <Checker
            checked={profitMode === PROFIT_MODE.FREEMIUM}
            onChange={(checked) => {
              if (checked) checkerOnChange('profitMode', PROFIT_MODE.FREEMIUM)
            }}
          >
            会员增值 / 订阅
          </Checker>
          <Space right={24} />
          <Checker
            checked={profitMode === PROFIT_MODE.AD}
            onChange={(checked) => {
              if (checked) checkerOnChange('profitMode', PROFIT_MODE.AD)
            }}
          >
            广告
          </Checker>
          <Space right={24} />
          <Checker
            checked={profitMode === PROFIT_MODE.PRODUCT}
            onChange={(checked) => {
              if (checked) checkerOnChange('profitMode', PROFIT_MODE.PRODUCT)
            }}
          >
            物品交易
          </Checker>
          <Space right={24} />
          <Checker
            checked={profitMode === PROFIT_MODE.FREE}
            onChange={(checked) => {
              if (checked) checkerOnChange('profitMode', PROFIT_MODE.FREE)
            }}
          >
            用爱发电
          </Checker>
          <Space right={24} />
          <Checker
            checked={profitMode === PROFIT_MODE.OTHRES}
            onChange={(checked) => {
              if (checked) checkerOnChange('profitMode', PROFIT_MODE.OTHRES)
            }}
          >
            其他
          </Checker>
        </CheckWrapper>
      </Section>
      <Br top={5} />
      <Section>
        <Label>项目类型</Label>
        <CheckWrapper>
          <Checker
            checked={workingMode === WORKING_MODE.SIDE_PROJECT}
            onChange={(checked) => {
              if (checked) {
                checkerOnChange('workingMode', WORKING_MODE.SIDE_PROJECT)
              }
            }}
          >
            副业项目（Side Project）
          </Checker>
          <Space right={24} />
          <Checker
            checked={workingMode === WORKING_MODE.FULLTIME}
            onChange={(checked) => {
              if (checked) checkerOnChange('workingMode', WORKING_MODE.FULLTIME)
            }}
          >
            全职项目
          </Checker>
        </CheckWrapper>
      </Section>
      <Br top={14} />
      <Section>
        <Label>
          <div>所在城市</div>
          <Hint>可选</Hint>
        </Label>
        <SelectWrapper>
          <Select
            value={filter((o) => includes(o.value, cities), cityOptions)}
            options={cityOptions}
            closeMenuOnSelect={false}
            onChange={(c) => citiesOnChange(c as TSelectOption[])}
            isMulti
          />
        </SelectWrapper>
        <SectionHint>
          选择所在城市后，将会在相关城市的子社区中看到该作品
        </SectionHint>
      </Section>

      <Br top={10} />
      <Section>
        <Label>团队成员</Label>
        <TeamsWrapper>
          <TeamList
            users={teammates}
            layout="edit-works"
            onAdd={addTeammate}
            onRemove={removeTeammate}
            onClose={closeSearchedUsers}
            onSearch={searchUser}
            searchedUsers={searchedUsers}
            withSetter
          />
        </TeamsWrapper>
      </Section>
    </Wrapper>
  )
}

export default memo(BasicInfoPart)
