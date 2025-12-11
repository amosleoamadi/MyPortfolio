import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Code2,
  FolderKanban,
  Award,
  Mail,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Header = () => {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "skills", icon: Code2, label: "Skills" },
    { id: "projects", icon: FolderKanban, label: "Projects" },
    { id: "certificates", icon: Award, label: "Certificates" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <HeaderWrapper>
        <Logo
          onClick={() => scrollToSection("home")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <LogoIcon>AA</LogoIcon>
          <LogoText>
            <LogoName>Amadi Amos Leo</LogoName>
            <LogoTitle>Frontend Developer</LogoTitle>
          </LogoText>
        </Logo>

        <Nav>
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={activeSection === item.id ? "active" : ""}
            >
              <item.icon size={16} />
              {item.label}
            </NavItem>
          ))}
        </Nav>

        <RightSection>
          <SocialLinks>
            <SocialLink
              href="https://github.com/amosleoamadi"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/amadi-amos-9b0261315/"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={18} />
            </SocialLink>
          </SocialLinks>

          <MobileToggle onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileToggle>
        </RightSection>
      </HeaderWrapper>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <MobileNavItem
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={activeSection === item.id ? "active" : ""}
              >
                <item.icon size={18} />
                {item.label}
              </MobileNavItem>
            ))}

            <MobileSocialLinks>
              <SocialLink
                href="https://github.com/amosleoamadi"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
              </SocialLink>
              <SocialLink
                href="https://linkedin.com"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} />
              </SocialLink>
              <SocialLink
                href="https://twitter.com"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter size={18} />
              </SocialLink>
            </MobileSocialLinks>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(18, 18, 26, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

const LogoIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: white;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    display: none;
  }
`;

const LogoName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
`;

const LogoTitle = styled.span`
  font-size: 12px;
  color: #888;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 10px;
  color: #888;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
  }

  &.active {
    background: linear-gradient(
      135deg,
      rgba(102, 126, 234, 0.2) 0%,
      rgba(118, 75, 162, 0.2) 100%
    );
    color: #fff;
    border: 1px solid rgba(102, 126, 234, 0.3);
  }

  svg {
    display: none;
  }

  @media (max-width: 1024px) {
    padding: 10px 12px;
    font-size: 13px;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const SocialLink = styled(motion.a)`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.2);
    color: #667eea;
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 10px;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: rgba(18, 18, 26, 0.98);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 20px;
  z-index: 99;
`;

const MobileNavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 10px;
  color: #888;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
  }

  &.active {
    background: linear-gradient(
      135deg,
      rgba(102, 126, 234, 0.2) 0%,
      rgba(118, 75, 162, 0.2) 100%
    );
    color: #fff;
  }
`;

const MobileSocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-top: 20px;
  margin-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;
