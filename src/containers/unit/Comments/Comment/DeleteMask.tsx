import { FC, memo } from 'react'

import { Button } from '@/components/Buttons'

import {
  DeleteOverlay,
  DeleteHintText,
  DeleteBtnGroup,
} from '../styles/comment/delete_mask'

import { cancelDelete, deleteComment } from '../logic'

type TProps = {
  show: boolean
}

const DeleteMask: FC<TProps> = ({ show }) => {
  return (
    <DeleteOverlay show={show}>
      <DeleteHintText>删除后该该评论将不可恢复</DeleteHintText>
      <DeleteBtnGroup>
        <Button size="small" type="red" ghost onClick={cancelDelete}>
          取消
        </Button>
        &nbsp;&nbsp;
        <Button size="small" type="red" onClick={deleteComment}>
          确定删除
        </Button>
      </DeleteBtnGroup>
    </DeleteOverlay>
  )
}

export default memo(DeleteMask)
