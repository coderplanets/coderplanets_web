import { FC, memo } from 'react'

import RichEditor from '@/containers/editor/RichEditor'

type TProps = {
  body?: string
  onChange?: (v: string) => void
  placeholder?: string
}

const CommentBodyEditor: FC<TProps> = ({
  body,
  onChange,
  placeholder = "// 评论内容（'Tab' 键快速插入）",
}) => {
  return (
    <div className="comment-editor">
      {/* @ts-ignore */}
      <RichEditor
        data={body}
        type="comment"
        placeholder={placeholder}
        onChange={(v) => onChange(JSON.stringify(v))}
      />
    </div>
  )
}

export default memo(CommentBodyEditor)
