import { breakpoint } from 'core/constants';
import styled from 'styled-components';

export const StyledHeaderComponent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 24px 12px;
  align-items: end;
  @media (min-width: ${breakpoint}) {
    padding: 20px 0 12px;
  }

  .available-balance {
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: #fff;
    @media (min-width: ${breakpoint}) {
      color: #222222;
    }
  }

  .balance-container {
    display: flex;
    gap: 12px;
    color: #fff;
    font-weight: bold;
    align-items: center;
  }

  .balance {
    font-weight: bold;
    font-size: 24px;
    color: #fff;
    @media (min-width: ${breakpoint}) {
      color: #222222;
    }
  }

  .currency-symbol {
    background: var(--primary-default);
    border-radius: 4px;
    padding: 2px 10px;
    font-size: 13px;
  }

  .add-new-btn {
    cursor: pointer;
    display: flex;
    gap: 6px;
    background: #325baf;
    padding: 8px 12px;
    border-radius: 4px;
    color: #fff;
    border: none;
    font-size: 12px;
    font-weight: bold;

    &:hover {
      opacity: 90%;
    }
  }
`;



export const StyledMyDebitCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: ${breakpoint}) {
    flex-direction: row;
    gap: 52px;
  }

  > div:first-child {
    width: 100%;
    @media (min-width: ${breakpoint}) {
      width: 45%;
    }
  }

  > div:last-child {
    width: 100%;
    background: #fff;
    padding: 24px;
    @media (min-width: ${breakpoint}) {
      width: 55%;
      padding: 0;
    }
  }
`;

export const StyledAction = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  background: #edf3ff;
  padding: 20px 20px;
  border-radius: 24px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  @media (min-width: ${breakpoint}) {
    border-radius: 8px;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
    width: 67px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    color: var(--secondary-default);
  }
  button: disabled {
    cursor: not-allowed;
  }

  > div {
    flex: 1;
    cursor: pointer;
    text-align: center;

    &:hover {
      opacity: 80%;
    }
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CardContainer = styled.div`
  padding: 0 24px;
  margin-top: 12px;
  @media (min-width: ${breakpoint}) {
    padding: 0px;
  }
`;

export const TitleModal = styled.div`
  font-weight: 600;
  font-size: 22px;
  text-align: center;
  margin-bottom: 30px;
  color: var(--secondary-default);
`;
