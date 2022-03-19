import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  color: ${theme('thread.articleDigest')};
  width: 500px;
  height: auto;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
  /* border: 1px solid; */
  padding: 0 10px;
`
export const ToggleTitle = styled.div<{ showDetail: boolean }>`
  color: ${({ showDetail }) =>
    showDetail ? theme('button.primary') : theme('thread.articleDigest')};

  font-size: 13px;
  cursor: pointer;
  margin-bottom: 25px;
  margin-left: -7px;

  &:hover {
    color: ${theme('button.primary')};
  }
  transition: all 0.2s;
`
export const Section = styled.div`
  ${css.flex('align-start')};
  margin-bottom: 20px;
`
export const TitleSection = styled.div`
  width: 120px;
  min-width: 120px;
`
const Title = styled.span`
  font-size: 14px;
  padding-left: 5px;
  padding-right: 5px;
  margin-left: -15px;
  letter-spacing: 1px;
  font-weight: bold;
  filter: saturate(0.6);

  background: linear-gradient(
    to top,
    #01404d 35%,
    transparent 35%,
    transparent 80%
  );
`
export const DoTitle = styled(Title)`
  color: ${theme('baseColor.green')};
`
export const DoNotTitle = styled(Title)`
  color: ${theme('baseColor.red')};
`
export const Ul = styled.ul`
  width: 320px;
  list-style: disc;
`
export const Li = styled.li`
  margin-bottom: 8px;
  line-height: 1.6;
  font-size: 14px;
`
export const Bold = styled.span`
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
`
export const Strike = styled.span`
  text-decoration: line-through;
`
