export type TArticleThread =
  | 'post'
  | 'job'
  | 'repo'
  | 'meetup'
  | 'blog'
  | 'radar'
  | 'works'
  // for groupher
  | 'roadmap'
  | 'changelog'
  | 'help'
  | 'about'

export type TThread =
  | TArticleThread
  | 'cper'
  | 'dashboard'
  | 'map'
  | 'kanban'
  | 'product'
  | 'team'
  | 'interview'
  | 'account'
  | 'guide'
