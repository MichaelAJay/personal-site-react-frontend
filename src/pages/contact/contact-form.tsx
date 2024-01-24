import { Button, Form, FormInstance, Input } from "antd";
import { PostContactForm } from "../../services/api/goServer/request/post-contact-form";
import { postContactForm } from "../../services/goServerService";

const MAX_MESSAGE_CHARS = 100

function ContactForm() {
    const [form]: Array<FormInstance<PostContactForm>> = Form.useForm();

    const onFinish = async (values: any) => {
        try {
            await postContactForm(values);
        } catch (err) {
            console.error('Error posting contact form', err);

        }
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