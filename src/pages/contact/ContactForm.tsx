import { Button, Form, FormInstance, Input, Tooltip } from 'antd';
import { PostContactForm } from '../../services/api/goServer/request/post-contact-form';
import { postContactForm } from '../../services/goServerService';
import './Contact.css';

const MAX_MESSAGE_CHARS = 100;
const DISABLED_FORM_TOOLTIP_MSG = 'My backend server is down, so the form is unavailable. Please reach out to me by email at michael.a.jay@protonmail.com.';

function ContactForm({
  className,
  isHealthy,
  onError,
  onSuccess,
}: {
  className: string;
  isHealthy: boolean;
  onError: (message: string) => void;
  onSuccess: (message: string) => void;
}) {
  const [form]: Array<FormInstance<PostContactForm>> = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      await postContactForm(values);
      onSuccess('Message received - thanks for reaching out!');
      form.resetFields();
    } catch (err) {
      const postfix = 'Form was not processed';
      if (err instanceof Error) {
        onError(`${err.message}: ${postfix}`);
      } else {
        onError(`An unexpected error occurred: ${postfix}`);
      }
    }
  };

  return (
    <Tooltip title={isHealthy ? '' : DISABLED_FORM_TOOLTIP_MSG}>
      <Form className={className} form={form} name="contact" onFinish={onFinish} disabled={!isHealthy}>
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
          name="message"
          label="Leave a message!"
          rules={[
            {
              required: true,
              message: "Enter a message and I'll be in contact",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={MAX_MESSAGE_CHARS} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </Form.Item>
      </Form>
    </Tooltip>
  );
}

export default ContactForm;
