import React, { ReactNode } from "react";

import SideBar from "components/side-bar";

import { AppLayoutContainer, ChildContainer,SideBarContainer } from "./styled";

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AppLayoutContainer>
      <SideBarContainer >
        <SideBar />
      </SideBarContainer>
      <ChildContainer>{children}</ChildContainer>
    </AppLayoutContainer>
  );
};

export default AppLayout;
