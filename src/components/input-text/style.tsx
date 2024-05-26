import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  label {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    color: rgb(12, 54, 90);
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  padding: 10px;
  background-color: rgba(244, 246, 248, 0);
  border: 1px solid #aebcc9;
  fontsize: 1rem;
`;
