import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Fade, Zoom, Slide, Bounce } from "react-awesome-reveal";
import cert from "../assets/thecurve.jpeg";
import trueminds from "../assets/trueminds.jpeg";

const CertificatesCard = () => {
  const certificates = [
    {
      title: "Frontend Development Program",
      issuer: "The Curve Africa",
      date: "2025",
      description:
        "Comprehensive frontend development program covering modern web technologies including React, JavaScript, and responsive design principles. Focused on building real-world projects and industry-ready skills.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      certificateUrl: cert,
    },
    {
      title: "Front-End Development Internship",
      issuer: "Trueminds Innovation",
      date: "2026",
      description:
        "Intensive internship program focused on front-end web development. Gained hands-on experience building scalable applications using React, and TypeScript. Collaborated on real-world projects and contributed to production-grade codebases.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      certificateUrl: trueminds,
    },
  ];

  return (
    <Section>
      <Container>
        <Fade direction="up" duration={600} triggerOnce>
          <Header>
            <Title>Certifications</Title>
            <Subtitle>
              Professional certifications and courses I've completed
            </Subtitle>
          </Header>
        </Fade>

        <Grid>
          {certificates.map((cert, index) => (
            <Fade
              key={cert.title}
              direction="up"
              delay={index * 100}
              duration={600}
              triggerOnce
            >
              <CertCard whileHover={{ y: -4 }}>
                <CertHeader>
                  <Zoom delay={index * 150} duration={500} triggerOnce>
                    <IconWrapper gradient={cert.gradient}>
                      <Award size={22} />
                    </IconWrapper>
                  </Zoom>
                  <CertInfo>
                    <Slide
                      direction="up"
                      delay={index * 100 + 200}
                      duration={400}
                      triggerOnce
                    >
                      <CertTitle>{cert.title}</CertTitle>
                    </Slide>
                    <Fade delay={index * 100 + 300} duration={400} triggerOnce>
                      <CertIssuer>{cert.issuer}</CertIssuer>
                    </Fade>
                  </CertInfo>
                </CertHeader>

                <Bounce delay={index * 100 + 400} duration={400} triggerOnce>
                  <CertDate>
                    <Calendar size={12} />
                    {cert.date}
                  </CertDate>
                </Bounce>

                <Fade delay={index * 100 + 500} duration={400} triggerOnce>
                  <CertDescription>{cert.description}</CertDescription>
                </Fade>

                <Slide
                  direction="up"
                  delay={index * 100 + 600}
                  duration={400}
                  triggerOnce
                >
                  <ViewButton
                    href={cert.certificateUrl}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} />
                    View Certificate
                  </ViewButton>
                </Slide>
              </CertCard>
            </Fade>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default CertificatesCard;

// ========== STYLED COMPONENTS (refactored for clarity & responsiveness) ==========

const Section = styled.section`
  background: linear-gradient(135deg, #1a1a24 0%, #12121a 100%);
  border-radius: 24px;
  padding: 40px 0;
  border: 1px solid rgba(255, 255, 255, 0.06);
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 32px 0;
    border-radius: 16px;
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: 1024px) {
    padding: 0 32px;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

const Header = styled.div`
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.p`
  font-size: 15px;
  color: #888;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 24px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const CertCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 20px;
  padding: 28px;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  width: 100%;
  max-width: 420px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(102, 126, 234, 0.08),
      transparent
    );
    transition: left 0.6s ease;
    pointer-events: none;
  }

  &:hover {
    border-color: rgba(102, 126, 234, 0.3);
    background: rgba(102, 126, 234, 0.05);
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 24px;
    max-width: 100%;
  }
`;

const CertHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 14px;
    margin-bottom: 18px;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: ${(props) =>
    props.gradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  transition: all 0.3s ease;

  ${CertCard}:hover & {
    transform: scale(1.08) rotate(4deg);
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

const CertInfo = styled.div`
  flex: 1;
`;

const CertTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 6px;
  line-height: 1.4;
  transition: all 0.3s ease;

  ${CertCard}:hover & {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

const CertIssuer = styled.p`
  font-size: 14px;
  color: #667eea;
  font-weight: 500;
  transition: color 0.3s ease;

  ${CertCard}:hover & {
    color: #8b7bff;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const CertDate = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #666;
  margin-bottom: 16px;
  font-weight: 500;
  transition: color 0.3s ease;

  ${CertCard}:hover & {
    color: #888;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 14px;
  }
`;

const CertDescription = styled.p`
  font-size: 14px;
  color: #888;
  line-height: 1.6;
  margin-bottom: 24px;
  flex-grow: 1;
  transition: color 0.3s ease;

  ${CertCard}:hover & {
    color: #aaa;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 20px;
  }
`;

const ViewButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 40px;
  background: rgba(102, 126, 234, 0.15);
  transition: all 0.3s ease;
  font-weight: 500;
  border: 1px solid rgba(102, 126, 234, 0.3);
  width: fit-content;

  &:hover {
    background: rgba(102, 126, 234, 0.3);
    color: #ffffff;
    border-color: rgba(102, 126, 234, 0.6);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 8px 18px;
  }
`;
