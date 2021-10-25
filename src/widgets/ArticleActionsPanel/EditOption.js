import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { THREAD } from '@/constant'
import { withGuardian } from '@/hoc'

import { Option, OptionIcon, OptionTitle } from './styles'

const EditOption = ({ thread, onEdit }) => (
  <>
    <Option onClick={() => onEdit(thread)}>
      <OptionIcon src={`${ICON_CMD}/edit.svg`} />
      {thread === THREAD.REPO ? (
        <OptionTitle>同步仓库信息</OptionTitle>
      ) : (
        <OptionTitle>编辑</OptionTitle>
      )}
    </Option>
  </>
)

EditOption.propTypes = {
  thread: T.string.isRequired,
  onEdit: T.func.isRequired,
}

EditOption.defaultProps = {}

export default withGuardian(EditOption)
