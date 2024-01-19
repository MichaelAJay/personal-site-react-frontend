import { Button, Form, Input } from "antd";

const MAX_MESSAGE_CHARS = 100

function ContactForm() {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values)
    }

    return (
        <Form
            form={form}
            name="contact"
            onFinish={onFinish}
        >
            <Form.Item
                name="name"
                label="Name"
                rules={[
                    {
                        type: 'string',
                        message: 'String name'
                    },
                    {
                        required: true,
                        message: 'Please include a name'
                    }
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
                        message: 'The input is not a valid e-mail.'
                    },
                    {
                        required: true,
                        message: 'Please input your email.'
                    }
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
                        message: 'Enter a message and I\'ll be in contact'
                    }
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
    )
}

export default ContactForm;