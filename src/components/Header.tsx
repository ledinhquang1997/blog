import React from "react";
import LoadingBar from "react-redux-loading-bar";
import styled from "styled-components";
import CustomLink from "./CustomLink";

function Header() {
  return (
    <div>
      <StyledLoadingBard />

      <AppHeaderContainer style={{}}>
        <AppHeader>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: 30,
                width: 30,
                background: "#b0dcbd",
              }}
            />
            <Logo>Conduit</Logo>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <NavButtonGroup>
              <CustomLink label="Home" to="/" activeOnlyWhenExact={true}/>
              <CustomLink label="Sign in" to="/sign-in" activeOnlyWhenExact={true}/>
              <CustomLink label="Sign up" to="/sign-up" activeOnlyWhenExact={true}/>
            </NavButtonGroup>
          </div>
        </AppHeader>
      </AppHeaderContainer>
    </div>
  );
}

export default Header;

const StyledLoadingBard = styled(LoadingBar)`
  background-color: #ff6a00;
  height: 2px;
  position: absolute;
`;

const Logo = styled.a`
  padding-left: 10px;
  font-weight: bold;
  font-size: 2rem;
  color: #3b8550;
`;

const AppHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 0;
  margin: auto;
  max-width: 1140px;
`;

const AppHeaderContainer = styled.div`
  /* box-shadow: 0px 1px 3px #555; */
  width: 100%;
  background: white;
  z-index: 10;
`;

const NavButtonGroup = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;