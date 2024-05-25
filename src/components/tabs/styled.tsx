import { breakpoint } from "core/constants";
import styled from "styled-components";

export const StyledTabContainer = styled.div`
  display: flex;
  gap: 32px;
  padding: 32px 24px 12px;
  @media (min-width: ${breakpoint}) {
    padding: 32px 0 12px;
  }
`;

export const StyledTab = styled.div`
  display: flex;
  cursor: pointer;

  border-bottom: 2px solid transparent;
  padding-bottom: 4px;

  button {
    cursor: pointer;
    border: none;
    color:#fff;
    background: transparent;
    @media (min-width: ${breakpoint}) {
      color:#222222;
    }
    opacity:0.3;

  }

  &.active  {
    border-color: #23CEFD;
    font-weight:bold; 
    button {
      opacity: 1;
    }
  }
  

  &:hover {
    opacity: 80%;
  }
`;
