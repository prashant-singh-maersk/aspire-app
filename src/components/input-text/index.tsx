import React, { forwardRef } from 'react';

import { StyledInput, InputContainer } from './style';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const InputText: React.FC<InputProps> = forwardRef((props: InputProps,ref: React.ForwardedRef<HTMLInputElement> ) => {
  const {label,inputRef, ...restProps} = props;  
  return (
    <InputContainer>
      <label>{props.label}</label>
      <StyledInput type="text" ref={ref} {...restProps} />
    </InputContainer>
  );
});

export default InputText;
