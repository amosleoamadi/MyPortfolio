import React from "react";
import styled from "styled-components";
import router from "./router/Router";
import Header from "./components/static/Header";
import HeroSection from "./pages/home";
import StatsSection from "./pages/stat";
import AboutCard from "./pages/about";
import ServicesSection from "./pages/services";
import SkillsGrid from "./pages/skills";
import ProjectsGrid from "./pages/projects";
import CertificatesCard from "./pages/certificates";
import ContactCard from "./pages/contact";

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <MainContent>
        <section id="home">
          <Container>
            <HeroSection />
            <StatsSection />
          </Container>
        </section>

        <Section id="about">
          <Container>
            <SectionTitle>
              About <span>Me</span>
            </SectionTitle>
            <SectionSubtitle>
              Get to know more about my background, experience, and what drives
              me as a developer.
            </SectionSubtitle>
            <AboutCard />
            <ServicesSection />
          </Container>
        </Section>

        <Section id="skills">
          <Container>
            <SectionTitle>
              My <span>Skills</span>
            </SectionTitle>
            <SectionSubtitle>
              Technologies and tools I use to bring ideas to life.
            </SectionSubtitle>
            <SkillsGrid />
          </Container>
        </Section>

        <Section id="projects">
          <Container>
            <SectionTitle>
              My <span>Projects</span>
            </SectionTitle>
            <SectionSubtitle>
              A showcase of my recent work and personal projects.
            </SectionSubtitle>
            <ProjectsGrid />
          </Container>
        </Section>

        <Section id="certificates">
          <Container>
            <SectionTitle>
              My <span>Certificates</span>
            </SectionTitle>
            <SectionSubtitle>
              Professional certifications and achievements.
            </SectionSubtitle>
            <CertificatesCard />
          </Container>
        </Section>

        <Section id="contact">
          <Container>
            <SectionTitle>
              Get In <span>Touch</span>
            </SectionTitle>
            <SectionSubtitle>
              Have a project in mind or want to collaborate? Feel free to reach
              out. I'm always open to discussing new opportunities.
            </SectionSubtitle>
            <ContactCard />
          </Container>
        </Section>
      </MainContent>
    </AppWrapper>
  );
};

export default App;
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #0a0a0f;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;

  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Section = styled.section`
  padding: 80px 0;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 16px;

  span {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 17px;
  color: #888;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 48px;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 32px;
  }
`;
