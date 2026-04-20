import { IconLink, IconRow } from "@/styles/shared";
import { ExternalIcon, GitHubIcon } from "./Icons";
import styled from "styled-components";

const LargeIconLink = styled(IconLink)`
  svg {
    width: 40px;
    height: 40px;
  }
`;

export default function ProjectLinks({ project, language }) {
  return (
    <IconRow>
      {project.github && (
        <LargeIconLink
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </LargeIconLink>
      )}
      {project.link && (
        <LargeIconLink
          href={project.link[language]}
          target="_blank"
          rel="noreferrer"
          aria-label="External link"
        >
          <ExternalIcon />
        </LargeIconLink>
      )}
      {project.pdf && (
        <LargeIconLink
          href={project.pdf[language]}
          target="_blank"
          rel="noreferrer"
          aria-label="PDF Document"
        >
          <ExternalIcon />
        </LargeIconLink>
      )}
    </IconRow>
  );
}
