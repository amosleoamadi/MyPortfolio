import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../../pages/sidebar";

const RootLayout = () => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutWrapper>
  );
};

export default RootLayout;
const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
  background: #0a0a0f;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 40px;
  overflow-y: auto;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 20px;
    padding-top: 80px;
  }
`;
