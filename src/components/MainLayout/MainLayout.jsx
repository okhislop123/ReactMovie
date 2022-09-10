import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import Header from "../Header";

const MainLayout = () => {
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content>
        {/* Nơi chứa component được định nghĩa trong router */}

        {/* component Outlet sẽ là nơi render ra các children route  */}
        <Outlet />
      </Layout.Content>
      <Layout.Footer>
        <h1>My Footer</h1>
        {/* <Footer /> */}
      </Layout.Footer>
    </Layout>
  );
};

export default MainLayout;
