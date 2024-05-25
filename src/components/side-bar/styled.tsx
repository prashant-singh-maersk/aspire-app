import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const SideBarContainer = styled.aside`
  height: 100vh;
  overflow: auto;
  background-color: var(--secondary-default);
  padding: 40px;
  position: sticky;
  top: 0;

  p {
    color: #fff;
    opacity: 30%;
    margin-bottom: 56px;
    margin-top: 24px;
    font-size: 15px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  > a {
    margin-bottom: 32px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  line-height: 32px;

  div {
    margin-left: 12px;
  }

  &.active {
    color: var(--primary-default);
  }

  &:hover {
    opacity: 80%;
  }
`;
