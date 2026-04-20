import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "@/pages/_app";
import { TechItem, IconRow, IconLink } from "@/styles/shared";
import { GitHubIcon, ExternalIcon } from "@/components/Icons";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 60px;
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
    transform: translateY(0);
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
  padding: 0.25rem 1.5rem;
  font-size: 0.95rem;
  line-height: 1.65;
  color: #a8b2d8;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  ${({ $reverse }) =>
    $reverse
      ? `
    margin-left: -200px;
    transform: translateX(200px);
    text-align: left;
  `
      : `
    margin-right: -200px;
    transform: translateX(-200px);
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

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: ${({ $reverse }) => ($reverse ? "flex-start" : "flex-end")};

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export default function Project({ project, index }) {
  const { language } = useContext(AppContext);
  const reverse = index % 2 !== 0;

  return (
    <Wrapper $reverse={reverse}>
      <ImageCard>
        <Link href={`/${project.id}`}>
          <Image src={project.coverArt} fill alt={project.coverArtAlt} />
        </Link>
      </ImageCard>

      <InfoPanel $reverse={reverse}>
        {project.label?.[language] && <Label>{project.label[language]}</Label>}

        <TitleLink href={`/${project.id}`}>
          <Title>{project.title}</Title>
        </TitleLink>
        {/* TODO */}
        <Description $reverse={reverse}>
          {/*           {project.description[language][0]} */}
          {project.contribution?.[language].map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Description>

        <TechList $reverse={reverse}>
          {project.programmingLanguages?.map((lang) => (
            <TechItem key={lang}>{lang}</TechItem>
          ))}
          {project.tools?.map((tool) => (
            <TechItem key={tool}>{tool}</TechItem>
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
          {project.link?.[language] && (
            <IconLink
              href={project.link[language]}
              target="_blank"
              rel="noreferrer"
              aria-label="External link"
            >
              <ExternalIcon />
            </IconLink>
          )}
          {project.pdf?.[language] && (
            <IconLink
              href={project.pdf[language]}
              target="_blank"
              rel="noreferrer"
              aria-label="PDF Document"
            >
              <ExternalIcon />
            </IconLink>
          )}
        </IconRow>
      </InfoPanel>
    </Wrapper>
  );
}
