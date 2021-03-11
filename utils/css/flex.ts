type FlexRule =
  | 'align-both'
  | 'align-center'
  | 'align-start'
  | 'align-end'
  | 'align-baseline'
  | 'justify-center'
  | 'justify-start'
  | 'justify-end'
  | 'justify-between'
  | 'justify-around'
  | 'justify-evenly'
  | ''

const flexExpand = (rule: FlexRule): string => {
  switch (rule) {
    case 'align-both':
      return 'align-items: center;justify-content: center;'

    case 'align-center':
      return 'align-items: center;'

    case 'align-start':
      return 'align-items: flex-start;'

    case 'align-end':
      return 'align-items: flex-end;'

    case 'align-baseline':
      return 'align-items: baseline;'

    case 'justify-center':
      return 'justify-content: center;'

    case 'justify-start':
      return 'justify-content: flex-start;'

    case 'justify-end':
      return 'justify-content: flex-end;'

    case 'justify-between':
      return 'justify-content: space-between;'

    case 'justify-around':
      return 'justify-content: space-around;'

    case 'justify-evenly':
      return 'justify-content: space-evenly;'

    default: {
      return ''
    }
  }
}
/*
 * flex opts sort order:
 * [flex-direction][align-items][flex-grow]
 */
const flexOpts = (rule1: FlexRule, rule2: FlexRule): string => {
  return `${flexExpand(rule1)}${flexExpand(rule2)}`
}

export const flex = (rule1: FlexRule = '', rule2: FlexRule = ''): string => `
  display: flex;
  ${flexOpts(rule1, rule2)};
`
export const flexGrow = (
  rule1: FlexRule = '',
  rule2: FlexRule = '',
): string => `
  ${flex(rule1, rule2)};
  flex-grow: 1;
`
export const flexColumn = (
  rule1: FlexRule = '',
  rule2: FlexRule = '',
): string => `
  ${flex(rule1, rule2)};
  flex-direction: column;
`
export const flexColumnGrow = (
  rule1: FlexRule = '',
  rule2: FlexRule = '',
): string => `
  ${flexColumn(rule1, rule2)};
  flex-grow: 1;
`
