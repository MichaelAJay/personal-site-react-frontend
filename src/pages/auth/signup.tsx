import { Button, Form, FormInstance, Input } from 'antd';
import { SignupForm } from '../../services/api/goServer/request/signup-form';
import { signUp } from '../../services/goServerService';
import Auth from './Auth';
import './Auth.css';

function Signup() {
  const [form]: Array<FormInstance<SignupForm>> = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      await signUp(values);
    } catch (err) {
      console.error('Error posting signup form', err);
    }
  };

  return (
    <Auth>
      <Form className='auth-form-container' form={form} name="sign-up" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              type: 'string',
              message: 'String name',
            },
            {
              required: true,
              message: 'Please include a name',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not a valid e-mail.',
            },
            {
              required: true,
              message: 'Please input your email.',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              type: 'string',
              message: 'String email',
            },
            {
              required: true,
              message: 'Please input your password.',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </Form.Item>
      </Form>
    </Auth>
  );
}

export default Signup;
