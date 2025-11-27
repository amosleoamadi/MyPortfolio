import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../components/layouts";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import SkillsPage from "../pages/skills";
import ProjectsPage from "../pages/projects";
import CertificatesPage from "../pages/certificates";
import ContactPage from "../pages/contact";
import Services from "../pages/services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "skills",
        element: <SkillsPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
