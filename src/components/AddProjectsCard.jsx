import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Flex } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getCurrentUser } from '../slices/authSlice';

const AddProjectsCard = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const [numProjects, setNumProjects] = useState(0);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    user && setNumProjects(user.numProjects);
  }, [user]);

  const handleAddProjectClick = (e) => {
    console.log('Add Project');
  };

  return (
    <Card
      title="Add Project"
      extra={<PlusOutlined onClick={handleAddProjectClick} />}
      style={{
        width: 200,
      }}
    >
      <Flex justify="space-between">
        <p>Number of Projects:</p>
        <p>{numProjects}</p>
      </Flex>
    </Card>
  );
};

export default AddProjectsCard;
