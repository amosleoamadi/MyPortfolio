import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, CheckCircle } from "lucide-react";

const HomePage = () => {
  const [showDownloadSuccess, setShowDownloadSuccess] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Amadi_Amos_Leo_CV.pdf';
    link.download = 'Amadi_Amos_Leo_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setShowDownloadSuccess(true);
    setTimeout(() => setShowDownloadSuccess(false), 3000);
  };

  return (
    <>
      <Card
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Content>
          <TextContent>
            <Badge>
              <Sparkles size={14} />
              Available for work
            </Badge>
            <Greeting>Hello, I'm</Greeting>
            <Title>
              <span>Amadi Amos Leo</span>
            </Title>
            <Role>Frontend Developer</Role>
            <Subtitle>
              A passionate frontend developer specializing in React, JavaScript,
              and modern web technologies. I create beautiful, responsive, and
              user-friendly web applications that deliver exceptional user
              experiences.
            </Subtitle>
            <ButtonGroup>
              <PrimaryButton
                href="/projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <ArrowRight size={16} />
              </PrimaryButton>
              <SecondaryButton
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                as={motion.button}
              >
                <Download size={16} />
                Download CV
              </SecondaryButton>
            </ButtonGroup>
          </TextContent>
          <AvatarWrapper
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Avatar>AA</Avatar>
            <StatusDot />
          </AvatarWrapper>
        </Content>
      </Card>

      <DownloadToast
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: showDownloadSuccess ? 1 : 0, y: showDownloadSuccess ? 0 : 50 }}
        transition={{ duration: 0.3 }}
      >
        <CheckCircle size={20} />
        CV downloaded successfully!
      </DownloadToast>
    </>
  );
};

export default HomePage;

const Card = styled(motion.section)`
  background: linear-gradient(135deg, #1a1a24 0%, #12121a 100%);
  border-radius: 24px;
  padding: 48px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 400px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(102, 126, 234, 0.5),
      transparent
    );
  }

  @media (max-width: 768px) {
    padding: 28px 20px;
    border-radius: 16px;
    width: 100%;
    margin: 0;
  }

  @media (max-width: 480px) {
    border-radius: 16px;
    padding: 24px 16px;
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 768px) {
    gap: 24px;
    width: 100%;
  }
`;

const TextContent = styled.div`
  flex: 1;
  width: 100%;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.2);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 13px;
  color: #667eea;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
    margin-bottom: 16px;
  }
`;

const Greeting = styled.span`
  display: block;
  font-size: 18px;
  color: #888;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 16px;

  span {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Role = styled.h2`
  font-size: 22px;
  font-weight: 500;
  color: #667eea;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 12px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #888;
  line-height: 1.7;
  max-width: 500px;
  margin-bottom: 32px;

  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 24px;
    line-height: 1.6;
    max-width: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    gap: 12px;
  }
`;

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  cursor: pointer;
  border: none;

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SecondaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  font-family: inherit;

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const AvatarWrapper = styled(motion.div)`
  position: relative;
  flex-shrink: 0;

  @media (max-width: 900px) {
    order: -1;
  }
`;

const Avatar = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 72px;
  color: white;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    z-index: -1;
    opacity: 0.3;
    filter: blur(20px);
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
    font-size: 48px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
    font-size: 40px;
  }
`;

const StatusDot = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  background: #22c55e;
  border-radius: 50%;
  border: 4px solid #12121a;
  z-index: 2;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    bottom: 10px;
    right: 10px;
    border-width: 3px;
  }
`;

const DownloadToast = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: #22c55e;
  color: white;
  padding: 12px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 4px 20px rgba(34, 197, 94, 0.3);
  z-index: 1000;
`;