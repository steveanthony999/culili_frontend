import { Form, Input } from 'antd';
import PropTypes from 'prop-types';

const NewProjectForm = ({ form }) => {
  return (
    <Form
      form={form}
      name="newProjectForm"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="Project Name"
        name="projectName"
        rules={[{ required: true, message: 'Please input the project name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[
          { required: true, message: 'Please input the project description!' },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

NewProjectForm.propTypes = {
  form: PropTypes.object.isRequired,
};

export default NewProjectForm;
