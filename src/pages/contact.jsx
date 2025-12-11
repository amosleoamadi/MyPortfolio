import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
} from "lucide-react";

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContentGrid>
        <ContactInfo>
          <InfoCard whileHover={{ x: 4 }}>
            <IconWrapper>
              <Mail size={20} />
            </IconWrapper>
            <InfoContent>
              <h4>Email</h4>
              <a href="mailto: amadiamos146@gmail.com">
                amadiamos146@gmail.com
              </a>
            </InfoContent>
          </InfoCard>

          <InfoCard whileHover={{ x: 4 }}>
            <IconWrapper>
              <Phone size={20} />
            </IconWrapper>
            <InfoContent>
              <h4>Phone</h4>
              <a href="tel:+234 902-9469-247">+234 902-9469-247</a>
            </InfoContent>
          </InfoCard>

          <InfoCard whileHover={{ x: 4 }}>
            <IconWrapper>
              <MapPin size={20} />
            </IconWrapper>
            <InfoContent>
              <h4>Location</h4>
              <p>Lagos, Nigeria</p>
            </InfoContent>
          </InfoCard>

          <SocialSection>
            <SocialTitle>Follow Me</SocialTitle>
            <SocialLinks>
              <SocialLink
                href="https://github.com/amosleoamadi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/amadi-amos-9b0261315/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </SocialLink>
            </SocialLinks>
          </SocialSection>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <Label htmlFor="name">Your Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Your Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </FormRow>

          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              placeholder="Project Inquiry"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          {isSubmitted ? (
            <SuccessMessage
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <CheckCircle size={20} />
              Message sent successfully! I'll get back to you soon.
            </SuccessMessage>
          ) : (
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={18} />
              Send Message
            </SubmitButton>
          )}
        </ContactForm>
      </ContentGrid>
    </Card>
  );
};

export default ContactCard;
const Card = styled(motion.section)`
  background: linear-gradient(135deg, #1a1a24 0%, #12121a 100%);
  border-radius: 24px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 16px;
  }
`;

const Header = styled.div`
  margin-bottom: 32px;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Subtitle = styled.p`
  font-size: 15px;
  color: #888;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(102, 126, 234, 0.3);
    background: rgba(102, 126, 234, 0.05);
  }

  @media (max-width: 768px) {
    padding: 16px;
    gap: 12px;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${(props) => props.gradient || "rgba(102, 126, 234, 0.1)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667eea;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const InfoContent = styled.div`
  h4 {
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 4px;
  }

  p,
  a {
    font-size: 14px;
    color: #888;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: #667eea;
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 13px;
    }
    p,
    a {
      font-size: 13px;
    }
  }
`;

const SocialSection = styled.div`
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 768px) {
    margin-top: 20px;
    padding-top: 20px;
  }
`;

const SocialTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 16px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const SocialLink = styled(motion.a)`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.2);
    color: #667eea;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: #888;
`;

const Input = styled.input`
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  color: #ffffff;
  font-size: 14px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: rgba(102, 126, 234, 0.5);
    background: rgba(102, 126, 234, 0.05);
  }

  &::placeholder {
    color: #555;
  }

  @media (max-width: 768px) {
    padding: 12px 14px;
  }
`;

const TextArea = styled.textarea`
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  color: #ffffff;
  font-size: 14px;
  min-height: 140px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: rgba(102, 126, 234, 0.5);
    background: rgba(102, 126, 234, 0.05);
  }

  &::placeholder {
    color: #555;
  }

  @media (max-width: 768px) {
    padding: 12px 14px;
    min-height: 120px;
  }
`;

const SubmitButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 15px;
  border: none;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  align-self: flex-start;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 14px 24px;
  }
`;

const SuccessMessage = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 12px;
  color: #22c55e;
  font-size: 14px;
`;
