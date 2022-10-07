/* eslint-disable */
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Layout, Affix, Drawer } from "antd";
import Sidenav from "./Sidenav";
import Header from "./Header";
import Footer from "./Footer";

const { Header: AntHeader, Content, Sider } = Layout;

function Main({ children, account, setaccount }) {
  const [visible, setVisible] = useState(false);
  const [sidenavColor, setSidenavColor] = useState("#28C1F0");
  const [sidenavType, setSidenavType] = useState("transparent");
  const [fixed, setFixed] = useState(true);

  const openDrawer = () => setVisible(!visible);
  const handleSidenavType = (type) => setSidenavType(type);
  const handleSidenavColor = (color) => setSidenavColor(color);
  const handleFixedNavbar = (type) => setFixed(type);

  let { pathname } = useLocation();
  pathname = pathname.replace("/", "");

  return ( 
    <Layout 
      className={`layout-dashboard`}
    >
      <Drawer
        title={false}
        placement={"left"}
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        key={"left"}
        width={250}
        className="drawer-sidebar"
      >
        <Layout className="layout-dashboard">
          <Sider
            trigger={null}
            width={250}
            theme="light"
            className={`sider-primary ant-layout-sider-primary`}
            style={{ background: sidenavType }}
          >

            <Sidenav color={sidenavColor} account={account} setaccount={setaccount} setVisible={setVisible} />

          </Sider>
        </Layout>
      </Drawer>
        
          <AntHeader className={`ant-header-fixed`}>
            <Header
              onPress={openDrawer}
              name={pathname}
              subName={pathname}
              handleSidenavColor={handleSidenavColor}
              handleSidenavType={handleSidenavType}
              handleFixedNavbar={handleFixedNavbar}
              account={account}
            />
          </AntHeader>
        <Content className="content-ant">{children}</Content>
        
    </Layout>
  );
}

export default Main;
