import { Card, Space } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

import AddProjectsCard from './AddProjectsCard';

const Overview = () => {
  return (
    <Space direction="horizontal" size={16} align="start">
      <AddProjectsCard />

      <Card
        title="Default size card"
        extra={<MoreOutlined />}
        style={{
          width: 300,
        }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
  );
};

export default Overview;
