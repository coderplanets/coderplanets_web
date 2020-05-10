/*
 *
 * Folder
 * see orignal example at: https://codepen.io/mydearxym2/pen/YzyLYqL
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import Content from './Content'
import Footer from './Footer'

import { Wrapper, TabShape, EditIconWrapper, EditIcon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Folder:index')

const Folder = ({
  size,
  title,
  desc,
  cover,
  total,
  updatedAt,
  lock,
  editable,
  contentType,
  onEdit,
  onSelect,
}) => {
  return (
    <Wrapper testid="folder" size={size}>
      {editable && (
        <EditIconWrapper onClick={onEdit}>
          <EditIcon src={`${ICON_CMD}/edit.svg`} />
        </EditIconWrapper>
      )}
      <TabShape />
      <Content contentType={contentType} cover={cover} desc={desc} />
      <Footer
        title={title}
        total={total}
        updatedAt={updatedAt}
        lock={lock}
        onClick={onSelect}
      />
    </Wrapper>
  )
}

Folder.propTypes = {
  title: T.string,
  desc: T.string,
  cover: T.string,
  total: T.number,
  updatedAt: T.string,
  lock: T.bool,
  editable: T.bool,
  onEdit: T.func,
  onSelect: T.func,
  contentType: T.oneOf(['text', 'cover']),
  size: T.oneOf(['small', 'default']),
}

Folder.defaultProps = {
  title: '计算机名人堂',
  desc: 'desc',
  cover:
    'https://cps-oss.oss-cn-shanghai.aliyuncs.com/navi/arch/wqsqpsngny.jpeg',
  total: 5,
  updatedAt: '2019-05-03T14:32:09Z',
  lock: false,
  editable: false,
  onEdit: log,
  onSelect: log,
  contentType: 'text',
  size: 'default',
}

export default React.memo(Folder)
