import { Layout } from 'antd';
import Sidebar from '../components/Sidebar';

const { Header, Content, Footer } = Layout;

const AppLayout = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout style={{ padding: '0 24px 24px' }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {/* Your page content goes here */}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Culili ©2023 Created with Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
