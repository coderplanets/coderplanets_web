export type TGQLError = {
  type: string
  path: string
  operation?: string
  details?: any // TODO
}
