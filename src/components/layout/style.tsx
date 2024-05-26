import { BREAKPOINT } from 'core/constants';
import styled from 'styled-components';

export const AppLayoutContainer = styled.div`

  display: flex;
`;

export const ChildContainer = styled.div`
  width: 100%;
  background-color:var(--secondary-default);
  @media (min-width: ${BREAKPOINT}) {
    padding: 60px;
    width: calc(100% - 300px);
    background-color:white;
  }
`;

export const SideBarContainer = styled.div`
  display:none;
  @media (min-width: ${BREAKPOINT}) {
    display:block;
    width: 300px;
    flex-shrink: 0;
  }
`;
