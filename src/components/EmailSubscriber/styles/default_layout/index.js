import styled from 'styled-components'

import { cs } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${cs.flexColumn('justify-center')};
  position: relative;
  width: 100%;
  height: ${({ active }) => (active ? '180px' : '50px')};

  background: #07303e;
  border-radius: 5px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 3px;
    display: block;
    background-image: repeating-linear-gradient(
      135deg,
      #8a5953 2px,
      #8a5953 15px,
      transparent 15px,
      transparent 25px,
      #4c7ba0 25px,
      #4c7ba0 40px,
      transparent 40px,
      transparent 50px
    );
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3px;
    display: block;
    background-image: repeating-linear-gradient(
      135deg,
      #8a5953 2px,
      #8a5953 15px,
      transparent 15px,
      transparent 25px,
      #4c7ba0 25px,
      #4c7ba0 40px,
      transparent 40px,
      transparent 50px
    );
  }
`
export const InnerWrapper = styled.div`
  padding: 0 5px;
`
