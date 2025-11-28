import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
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
  ServerIcon,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/about", icon: User, label: "About" },
    { path: "/skills", icon: Code2, label: "Skills" },
    { path: "/projects", icon: FolderKanban, label: "Projects" },
    { path: "/services", icon: ServerIcon, label: "Services" },
    { path: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <>
      <MobileToggle onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </MobileToggle>

      <SidebarWrapper className={isOpen ? "open" : ""}>
        <Profile>
          <Avatar
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            AA
          </Avatar>
          <Name>Amadi Amos Leo</Name>
          <Title>FrontEnd Developer</Title>
        </Profile>

        <Nav>
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setIsOpen(false)}
            >
              <item.icon size={18} />
              {item.label}
            </NavItem>
          ))}
        </Nav>

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
        </SocialLinks>
      </SidebarWrapper>

      {/* Overlay for mobile */}
      <Overlay
        className={isOpen ? "open" : ""}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};

export default Sidebar;

const SidebarWrapper = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  width: 260px;
  height: 100vh;
  background: linear-gradient(180deg, #12121a 0%, #0d0d12 100%);
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    transform: translateX(-100%);

    &.open {
      transform: translateX(0);
    }
  }

  @media (min-width: 769px) {
    position: sticky;
    transform: translateX(0);
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;

    &.open {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const MobileToggle = styled.button`
  display: none;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1001;
  background: #1a1a24;
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

const Profile = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Avatar = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: 700;
  color: white;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
`;

const Name = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 4px;
`;

const Title = styled.p`
  font-size: 13px;
  color: #888;
`;

const Nav = styled.nav`
  flex: 1;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 10px;
  color: #888;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
  transition: all 0.2s ease;

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
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
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
