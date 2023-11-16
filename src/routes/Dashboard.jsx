import { Layout } from 'antd';
import AppLayout from '../utils/Layout';
import Sidebar from '../components/Sidebar';
import Overview from '../components/Overview';
import DashboardHeader from '../components/DashboardHeader';

const { Header, Footer, Content } = Layout;

const headerStyle = {
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
  borderBottom: '1px solid #eee',
};
const contentStyle = {
  lineHeight: '120px',
  backgroundColor: '#fff',
  padding: '0 2rem',
};
const footerStyle = {
  textAlign: 'center',
  backgroundColor: '#fff',
  borderTop: '1px solid #eee',
};

const Dashboard = () => {
  return (
    <AppLayout>
      <Header style={headerStyle}>
        <DashboardHeader />
      </Header>
      <Layout hasSider>
        <Sidebar />
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
