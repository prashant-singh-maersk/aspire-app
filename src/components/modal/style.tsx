import { BREAKPOINT } from 'core/constants';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 10;
`;

export const ModalBody = styled.div`
  position: relative;
  margin: 100px auto;
  padding: 40px 30px;
  max-width: 90%;
  background-color: #fff;
  border-radius: 12px;
  @media (min-width: ${BREAKPOINT}) {
    max-width: 440px;
    margin: 200px auto;
  }

  .close {
    position: absolute;
    right: 12px;
    top: 12px;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    background: transparent;
    font-size: 15px;
    color: black;
    font-size: 15px;
  }
`;
