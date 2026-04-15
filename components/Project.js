import Image from "next/image";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { useContext } from "react";
import { LanguageContext } from "@/pages/_app";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 60px;
  animation: ${fadeUp} 0.6s ease both;

  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageCard = styled.div`
  position: relative;
  flex: 1 1 55%;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  transition: transform 0.25s ease;

  &:hover {
    transform: translate(-4px, -4px);
    box-shadow: 4px 4px 0px #64ffda;
  }

  &:active {
    transform: translate(0px, 0px);
    box-shadow: 2px 2px 0px #64ffda;
  }
`;

const InfoPanel = styled.div`
  flex: 1 1 40%;
  display: flex;
  flex-direction: column;
  align-items: ${({ $reverse }) => ($reverse ? "flex-start" : "flex-end")};
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const Label = styled.p`
  font-family: "SF Mono", "Fira Code", "Fira Mono", monospace;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  color: #64ffda;
  margin: 0;
`;

const Title = styled.h3`
  font-family: "Calibre", "Inter", sans-serif;
  font-size: clamp(1.4rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: #ccd6f6;
  margin: 0;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: #64ffda;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0px);
  }

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const TitleLink = styled(Link)`
  text-decoration: none;
`;

const Description = styled.div`
  background: #112240;
  border-radius: 4px;
  padding: 1.25rem 1.5rem;
  font-size: 0.95rem;
  line-height: 1.65;
  color: #a8b2d8;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  ${({ $reverse }) =>
    $reverse
      ? `
    margin-left: -100px;
    transform: translateX(100px);
    text-align: left;
  `
      : `
    margin-right: -100px;
    transform: translateX(-100px);
    text-align: right;
  `}

  a {
    color: #64ffda;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    text-align: left;
    margin-left: 0;
    margin-right: 0;
    transform: translateX(0);
  }
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TechItem = styled.li`
  font-family: "SF Mono", "Fira Code", monospace;
  font-size: 0.78rem;
  color: #8892b0;
  white-space: nowrap;
`;

const IconRow = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconLink = styled.a`
  color: #a8b2d8;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
  display: flex;
  align-items: center;

  svg {
    width: 26px;
    height: 26px;
  }

  &:hover {
    color: #64ffda;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0px);
  }
`;

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54
      6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0
      0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3
      6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
    />
  </svg>
);

const ExternalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Project({ project, index }) {
  const { language } = useContext(LanguageContext);

  return (
    <Wrapper $reverse={index % 2}>
      <ImageCard>
        <Link href={`/${project.id}`}>
          <Image src={project.coverArt} fill alt={project.coverArtAlt} />
        </Link>
      </ImageCard>

      <InfoPanel $reverse={index % 2}>
        <Label>{project.label[language]}</Label>
        <TitleLink href={`/${project.id}`}>
          <Title>{project.title}</Title>
        </TitleLink>
        <Description $reverse={index % 2}>
          {project.description[language][0]}
        </Description>
        <TechList>
          {project.programmingLanguages &&
            project.programmingLanguages.map((programmingLanguage) => (
              <TechItem key={programmingLanguage}>
                {programmingLanguage}
              </TechItem>
            ))}
          {project.software &&
            project.software.map((software) => (
              <TechItem key={software}>{software}</TechItem>
            ))}
        </TechList>
        <IconRow>
          {project.github && (
            <IconLink
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconLink>
          )}
          {project.link && (
            <IconLink
              href={project.link[language]}
              target="_blank"
              rel="noreferrer"
              aria-label="External link"
            >
              <ExternalIcon />
            </IconLink>
          )}
          {project.pdf && (
            <IconLink
              href={project.pdf[language]}
              target="_blank"
              rel="noreferrer"
              aria-label="Pdf Document"
            >
              <ExternalIcon />
            </IconLink>
          )}
        </IconRow>
      </InfoPanel>
    </Wrapper>
  );
}
