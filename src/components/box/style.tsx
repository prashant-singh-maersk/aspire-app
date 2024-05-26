import { BREAKPOINT } from "core/constants";
import styled from "styled-components";

export const StyledBox = styled.div`
  @media (min-width: ${BREAKPOINT}) {
    padding: 40px;
    border-radius: 6px;
    border: 0.5px solid #FCFCFC;
    box-shadow: 0px 2px 12px 2px #00000014;
  }
`;