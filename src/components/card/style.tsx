import { BREAKPOINT } from "core/constants";
import styled from "styled-components";

export const CardContainer = styled.div<{ freezed: boolean }>`
  color: #fff;
  padding: 0 2px;

  .credit-card {
    background: ${(props) => (props.freezed ?'var(--freezed-color)' : 'var(--primary-default)')};
    border-radius: 12px;
    padding: 24px;
    cursor: ${(props) => (props.freezed ? 'not-allowed' : 'inherit')};
  }

  .bank-logo {
    display: flex;
    justify-content: flex-end;

    img {
      height: 100%;
      max-width: 160px;
    }
  }

  .card-holder {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    letter-spacing: 2px;
    text-align: left;
    text-overflow: ellipsis;
    text-wrap: nowrap;
    overflow: hidden;
    margin-top:24px;
}
  }

  .card-number {
    letter-spacing: 2px;
    display: flex;
    gap: 20px;
    font-weight: bold;
    font-size: 14px;
    margin-top: 28px;
    margin-bottom: 16px;
  }

  .expiry {
    margin-right: 80px;
  }

  .expiry-and-cvv {
    display: flex;
    font-weight: bold;
    font-size: 13px;
    margin-bottom:4px;
  }

  .cvv {
    font-size: 13px;
    letter-spacing: 2px;
  }

  .show-hide-btn {
    text-align: right;
    font-size:12px;
    label{
      display:inline-flex;
      justify-content: flex-end;
      align-items:center;
      gap:4px;
      padding: 5px 10px;
      background: white;
      border-radius: 8px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      position:relative;
      &:after {
        content: "";
        height: 26px;
        position: absolute;
        right: 0;
        bottom: -12px;
        width: 20px;
        z-index: -1;
        background: white;

    @media (min-width: ${BREAKPOINT}) {
      background: transparent;
    }
    }
    img {
      width: auto !important;
    }
    button {
      background: transparent;
      border: none;
      color: var(--primary-default);
      font-weight: bold;
      
    }
  }
`;