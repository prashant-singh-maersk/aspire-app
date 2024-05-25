import React from "react";

import { StyledBodyComponent } from "./style";

const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledBodyComponent>{children}</StyledBodyComponent>;
};

export default Body;
