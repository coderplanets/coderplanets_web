import { FC, memo } from 'react'

import RichEditor from '@/containers/editor/RichEditor'

type TProps = {
  body?: string
  onChange?: (v: string) => void
}

const CommentBodyEditor: FC<TProps> = ({ body, onChange }) => {
  return (
    <div className="comment-editor">
      <RichEditor
        data={body}
        type="comment"
        placeholder="// 评论内容（'Tab' 键快速插入）"
        onChange={(v) => onChange(JSON.stringify(v))}
      />
    </div>
  )
}

export default memo(CommentBodyEditor)
