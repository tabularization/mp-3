import { styled } from "styled-components";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Education from "./pages/Education";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import References from "./pages/References";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Organizations from "./pages/Organizations";

const PageWrapper = styled.div`
  width: 80vw;
  background-color: #000b15;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  color: #e0e6ed;
`;

const PageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

function Root() {
  return (
    <PageWrapper>
      <Header />
      <PageContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/references" element={<References />} />
        </Routes>
      </PageContainer>
      <Footer />
    </PageWrapper>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}
