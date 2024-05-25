import React from "react";

import AspireMainLogo from "icons/Aspire Logo.svg";
import { ReactComponent as HomeIcon } from "icons/Home.svg";
import { ReactComponent as CardIcon } from "icons/Card.svg";
import { ReactComponent as CreditIcon } from "icons/Credit.svg";
import { ReactComponent as PaymentIcon } from "icons/Payments.svg";
import { ReactComponent as SettingsIcon } from "icons/Account.svg";

import { SideBarContainer, List, StyledLink as Link } from "./styled";

const SideBar: React.FC = () => {
  return (
    <SideBarContainer>
      <img src={AspireMainLogo} alt="logo" />
      <p>Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
      <nav>
        <List>
          <Link to="/home">
            <HomeIcon />
            <div>Home</div>
          </Link>
          <Link to="/cards">
            <CardIcon />
            <div>Cards</div>
          </Link>
          <Link to="/payments">
            <PaymentIcon />
            <div>Payments</div>
          </Link>
          <Link to="/credit">
            <CreditIcon />
            <div>Credit</div>
          </Link>
          <Link to="/settings">
            <SettingsIcon />
            <div>Settings</div>
          </Link>
        </List>
      </nav>
    </SideBarContainer>
  );
};

export default SideBar;
