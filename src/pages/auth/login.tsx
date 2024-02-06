import { useNavigate } from 'react-router-dom';
import { Button, Form, FormInstance, Input } from 'antd';
import { login } from '../../services/goServerService';
import { LoginForm } from '../../services/api/goServer/request/login-form';

function Login() {
  const [form]: Array<FormInstance<LoginForm>> = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      await login(values);
    } catch (err) {
      console.error('Error posting signup form', err);
    }
  };

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/sign-up');
  };

  return (
    <div>
      <Form form={form} name="login" onFinish={onFinish}>
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
      <Button onClick={handleSignUpClick}>Sign Up</Button>
    </div>
  );
}

export default Login;
