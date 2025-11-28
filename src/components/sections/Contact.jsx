// Contact.jsx
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 24px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.h2`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const FieldLabel = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 6px;
  display: block;
`;

const ContactInput = styled.input`
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  min-height: 140px;
  resize: vertical;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(90deg, #7b61ff, #5b9cff);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Contact Me</Title>
        <Desc>Have a question or want to work together? Send me a message.</Desc>

        {/* Simple Formspree form integrated into styled component */}
        <ContactForm
          action="https://formspree.io/f/mzzlyagk"
          method="POST"
          aria-label="Contact form"
        >
          <ContactTitle>Send a message</ContactTitle>

          {/* Email field */}
          <FieldLabel htmlFor="email">Your email</FieldLabel>
          <ContactInput
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          {/* Message field */}
          <FieldLabel htmlFor="message">Your message</FieldLabel>
          <ContactInputMessage
            id="message"
            name="message"
            placeholder="Write your message here..."
            required
          />

          <ContactButton type="submit">Send</ContactButton>
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
