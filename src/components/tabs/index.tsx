import React from "react";

import { StyledTabContainer, StyledTab } from "./styled";

const Tabs: React.FC<{ tabs: any; active: any; setActive: any }> = ({
  tabs = [],
  active,
  setActive,
}) => {
  return (
    <StyledTabContainer>
      {tabs?.map((tab: any) => {
        return (
          <StyledTab key={tab.id} className={active === tab.id ? "active" : ""}>
            <button onClick={() => setActive(tab.id)}>{tab.label}</button>
          </StyledTab>
        );
      })}
    </StyledTabContainer>
  );
};

export default Tabs;
