import { FC, memo } from 'react'

const Footer: FC = () => {
  return (
    <div>
      <div>mydearxym 发布于： 3 天前</div>
      <div>
        你和 头像 Raw 等 24 人觉得不错 -- 评论 35，收藏, 分享, 举报(more 里面)
      </div>
    </div>
  )
}

export default memo(Footer)
