import styled from 'styled-components';

export const TransactionContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: flex-start;

  .info-container {
    flex-grow: 1;
  }
  .name {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 4px;
  }
  .date {
    color: #aaaaaa;
    margin-top: 4px;
    font-size: 13px;
  }
`;

export const TransactionLogoContainer = styled.div<{ color: string }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-right: 12px;
`;

export const TransactionLogo = styled.img`
  width: 16px;
  height: 16px;
  position: relative;
  top: 16px;
  left: 16px;
`;
