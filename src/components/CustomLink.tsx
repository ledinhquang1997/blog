import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import styled from "styled-components";

export default function CustomLink({
  label,
  to,
  activeOnlyWhenExact,
}: {
  label: string;
  to: string;
  activeOnlyWhenExact: boolean;
}) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <NavButton active={!!match}>
      <Link style={{ color: "inherit" }} to={to}>
        {label}
      </Link>
    </NavButton>
  );
}

const NavButton = styled.li`
  background-color: ${(props: { active: boolean }) =>
    props.active ? "#c7e6d0" : "transparent"};
  font-weight: ${(props: { active: boolean }) =>
    props.active ? "500" : "inherit"};
  border-radius: 5px;
  display: inline-block;
  padding: 0 20px;
  cursor: pointer;
  transition: all 0.2s;
  :hover {
    color: rgba(0, 0, 0, 1);
    transform: translateY(-2px);
  }
`;
