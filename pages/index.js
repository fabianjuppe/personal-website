import styled, { keyframes } from "styled-components";
import { projects } from "@/lib/projects";
import Project from "@/components/Project";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Page = styled.main`
  min-height: 100vh;
  background: #0a192f;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const Name = styled.h1`
  font-family: "Calibre", "Inter", sans-serif;
  font-size: clamp(4.4rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: #ccd6f6;
  margin: 0;
  animation: ${fadeUp} 0.6s ease both;
`;

const Subtitle = styled.h2`
  font-family: "SF Mono", "Fira Code", "Fira Mono", monospace;
  font-size: clamp(2.4rem, 2.5vw, 1.75rem);
  letter-spacing: 0.08em;
  font-weight: 400;
  color: #64ffda;
  margin: 0 0 50px 0;
  animation: ${fadeUp} 0.6s ease both;
`;

export default function Home() {
  return (
    <Page>
      <Name>Fabian Juppe</Name>
      <Subtitle>Portfolio</Subtitle>
      {projects &&
        projects.map((project, index) => (
          <Project key={project.title} project={project} index={index} />
        ))}
    </Page>
  );
}
