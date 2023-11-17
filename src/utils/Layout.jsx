import { Layout } from 'antd';
import PropTypes from 'prop-types';

const AppLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

AppLayout.propTypes = {
  children: PropTypes.node
};

export default AppLayout;
