import styled from "styled-components";

export const StyledAccordion = styled.div<{ isOpen: boolean }>`
  width: 100%;

  .accordion-title {
    display: flex;
    align-items:center;
    justify-content: space-between;
    width: 100%;
    background: #f5f9ff;
    border-radius: 8px;
    border: 1px solid #f5f5f5;
    padding: 24px;
    color:#0C365A;
    font-size:14px;
    border-bottom-left-radius: ${(props) => (props.isOpen ? 0 : "8px")};
    border-bottom-right-radius: ${(props) => (props.isOpen ? 0 : "8px")};
  }

  .accordion-arrow {
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    transition: transform 0.3s ease-in-out;
  }

  .accordion-content {
    border: 1px solid #f0f0f0;
    padding: 28px;
    border-top: none;
    background: #fff;
  }
`;
