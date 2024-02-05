import { Flex, Typography } from "antd";
import ContactForm from "./ContactForm";
const { Paragraph, Title } = Typography;

const CONTENT_1 = `Thanks for visiting my website! I'm currently looking for my next great fulltime web development opportunity. If you have one, I'd love to hear about it!`;
const CONTENT_2 = `I'm also available for project-based work. I can deliver a fullscale web application to specification, and can also help with formalizing requirements and setting reasonable timelines, then meeting them.`;
const CONTENT_3 = `Whether I help you build your application, or have an existing application, I can help you deploy it, or manage & optimize your current deployment.`;
const CONTENT_4 = `As I mention in the "About" section - this website is a living work-in-progress, my study in front-end web development and back-end development with Go. If some visual of the website seems strange to you - I'd love to hear some feedback!`;
const CONTENT_5 = `Feel free to use this contact form to discuss any opportunities you may have, or to provide feedback!`;
const CONTENT_6 = `Or email me directly: michael.a.jay@protonmail.com`;

function Contact() {
    return (
        <Flex justify={'space-around'}>
            <div>
                <Title level={3}>Contact Me!</Title>
                <Paragraph>{CONTENT_1}</Paragraph>
                <Paragraph>{CONTENT_2}</Paragraph>
                <Paragraph>{CONTENT_3}</Paragraph>
                <Paragraph>{CONTENT_4}</Paragraph>
                <Paragraph>{CONTENT_5}</Paragraph>
                <Paragraph>{CONTENT_6}</Paragraph>
            </div>
            <ContactForm />
        </Flex>
    )
}

export default Contact;