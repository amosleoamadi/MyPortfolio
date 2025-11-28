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
  width: 100%;
  display: flex;
  height: 100vh;
  background: #0a0a0f;
`;

const MainContent = styled.main`
  padding: 40px;
  overflow-y: auto;
  width: calc(100% - 260px);

  @media (max-width: 768px) {
    padding: 28px;
    padding-top: 80px;
    width: 100%;
  }
`;
