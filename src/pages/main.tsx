import Loading from '../components/loading';
import MainBreadCrumb from '../components/breadcrumb';
import React from 'react';
import SideMenu from '../components/menu';
import RoutesAuth from './routes.auth';
import { Layout, Row, Col } from 'antd';
import { useLocation } from 'react-router';
const { Header, Footer, Sider, Content } = Layout;

const Main = () => {
  const [authenticating, setAuthenticating] = React.useState(false);
  const { state } = useLocation<{ isLogin: boolean }>();

  React.useEffect(() => {
    if (state?.isLogin) {
      setAuthenticating(false);
    }
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <SideMenu />
      </Sider>
      <Layout className="site-layout" style={{ padding: 0 }}>
        <Header
          style={{
            paddingLeft: 20,
            background: '#fff',
            boxShadow: '3px 3px 20px #dbd9d9',
          }}
        >
          <MainBreadCrumb />
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div className="site-layout-background" style={{ padding: 24 }}>
            {authenticating ? <Loading /> : <RoutesAuth />}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Content System ©2021 Created by Atome
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Main;
