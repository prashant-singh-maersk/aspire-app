import React from "react";

import { StyledBox } from "./style";

const Box: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

export default Box;
