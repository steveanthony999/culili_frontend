import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Flex, Modal, Form } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getCurrentUser } from '../slices/authSlice';
import { createProject } from '../slices/projectSlice';
import NewProjectForm from './NewProjectForm';

const AddProjectsCard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [form] = Form.useForm();
  const [numProjects, setNumProjects] = useState(0);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setNumProjects(user.numProjects);
    }
  }, [user]);

  const showAddProjectForm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((projectData) => {
        setConfirmLoading(true);
        dispatch(createProject(projectData))
          .unwrap()
          .then(() => {
            console.log('Project created successfully');
            setOpen(false);
            form.resetFields();
            dispatch(getCurrentUser());
          })
          .catch((error) => console.error('Failed to create project: ', error))
          .finally(() => setConfirmLoading(false));
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <Card
        title="Add Project"
        extra={<PlusOutlined onClick={showAddProjectForm} />}
        style={{ width: 200 }}
      >
        <Flex justify="space-between">
          <p>Number of Projects:</p>
          <p>{numProjects}</p>
        </Flex>
      </Card>

      <Modal
        title="Add a New Project"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <NewProjectForm form={form} />
      </Modal>
    </>
  );
};

export default AddProjectsCard;
