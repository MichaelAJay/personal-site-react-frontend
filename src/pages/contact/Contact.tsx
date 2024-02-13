import { Alert, Flex, Typography } from 'antd';
import ContactForm from './ContactForm';
import './Contact.css';
import { useRef, useState } from 'react';
import { useBackendHealthCheck } from '../../hooks/backend-health-check';
const { Paragraph, Title } = Typography;

const CONTENT_1 = `Thanks for visiting my website! I'm currently looking for my next great fulltime web development opportunity. If you have one, I'd love to hear about it! Special note: I shine best as a backend developer, but am gaining confidence in the frontend.`;
const CONTENT_2 = `I'm also available for project-based work. I can deliver a fullscale web application to specification, and can also help with formalizing requirements and setting reasonable timelines, then meeting them.`;
const CONTENT_3 = `Whether I help you build your application, or have an existing application, I can help you deploy it, or manage & optimize your current deployment.`;
const CONTENT_4 = `As I mention in the "About" section - this website is a living work-in-progress, my study in front-end web development and back-end development with Go. If some visual aspect of the website seems strange to you - I'd love to hear some feedback!`;
const CONTENT_5 = `Feel free to use this contact form to discuss any opportunities you may have, or to provide feedback!`;
const CONTENT_6 = `Or email me directly: michael.a.jay@protonmail.com`;

function Contact() {
  const [error, setError] = useState<string | null>(null);
  const [isErrorAlertVisible, setIsErrorAlertVisible] = useState(false);
  const fadeOutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dismissTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isBEHealthy = useBackendHealthCheck();

  const handleError = (message: string) => {
    setError(message);
    setIsErrorAlertVisible(true);

    // Clear existing timeouts if they are set
    if (fadeOutTimeoutRef.current) {
      clearTimeout(fadeOutTimeoutRef.current);
    }
    if (dismissTimeoutRef.current) {
      clearTimeout(dismissTimeoutRef.current);
    }

    fadeOutTimeoutRef.current = setTimeout(() => {
      setIsErrorAlertVisible(false);
      dismissTimeoutRef.current = setTimeout(() => setError(null), 500);
    }, 5000);
  };

  return (
    <div className="contact-container">
      <Flex justify={'space-between'}>
        <div className="contact-content">
          <Title level={3}>Contact Me!</Title>
          <Paragraph>{CONTENT_1}</Paragraph>
          <Paragraph>{CONTENT_2}</Paragraph>
          <Paragraph>{CONTENT_3}</Paragraph>
          <Paragraph>{CONTENT_4}</Paragraph>
          <Paragraph>{CONTENT_5}</Paragraph>
          <Paragraph>{CONTENT_6}</Paragraph>
        </div>
        <div className="contact-form-outer-container">
          <ContactForm
            className="contact-form-container"
            isHealthy={isBEHealthy}
            onError={handleError}
          />
        </div>
      </Flex>
      {isErrorAlertVisible && (
        <Alert
          className={isErrorAlertVisible ? 'alert-visible' : 'alert-hidden'}
          message={error}
          type="error"
          showIcon
          style={{
            position: 'fixed',
            left: '50%',
            top: '10px',
            zIndex: 1000,
            height: '50px',
            transform: 'translateX(-50%)',
          }}
        />
      )}
    </div>
  );
}

export default Contact;
