import { useState } from 'react';
import { Layout } from 'antd';
import AppLayout from '../utils/Layout';
import Sidebar from '../components/Sidebar';
import Overview from '../components/Overview';
import DashboardHeader from '../components/DashboardHeader';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
  borderBottom: '1px solid #eee',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  backgroundColor: '#fff',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  minHeight: 'calc(100vh - 64px)',
};
const footerStyle = {
  textAlign: 'center',
  backgroundColor: '#fff',
  borderTop: '1px solid #eee',
};

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AppLayout>
      <Header style={headerStyle}>
        <DashboardHeader />
      </Header>
      <Layout hasSider>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={siderStyle}
          theme="light"
        >
          <Sidebar />
        </Sider>
        <Layout>
          <Content style={contentStyle}>
            <Overview />
          </Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </AppLayout>
  );
};

export default Dashboard;
