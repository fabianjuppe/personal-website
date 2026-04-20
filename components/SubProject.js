import { t } from "@/lib/translations";
import {
  Category,
  Description,
  Headline,
  ImageGrid,
  InfoPanel,
  MediaCard,
  TechItem,
  TechList,
  Title,
} from "@/styles/shared";
import Image from "next/image";
import styled from "styled-components";

const ContributorLink = styled.a`
  color: #8892b0;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #64ffda;
  }
`;

export default function SubProject({ project, language }) {
  return (
    <>
      <Title>{project.title}</Title>
      <MediaCard>
        <Image src={project.coverArt} fill alt={project.coverArtAlt} />
      </MediaCard>
      <TechList>
        <Category>{t.programmingLanguages[language]}</Category>
        {project.programmingLanguages.map((lang) => (
          <TechItem key={lang}>{lang}</TechItem>
        ))}
        <Category>{t.tools[language]}</Category>
        {project.tools.map((tool) => (
          <TechItem key={tool}>{tool}</TechItem>
        ))}
        <Category>{t.date[language]}</Category>
        <TechItem>{project.date}</TechItem>
        {project.contributors && (
          <>
            <Category>{t.contributors[language]}</Category>
            {project.contributors.map((c) => (
              <TechItem key={c}>
                <ContributorLink href={c.github}>{c.name}</ContributorLink>
              </TechItem>
            ))}
          </>
        )}
      </TechList>
      <InfoPanel>
        <Description>
          <Headline>{t.description[language]}</Headline>
          {project.description?.[language].map((p) => (
            <p key={p}>{p}</p>
          ))}
          {project.images && (
            <ImageGrid>
              {project.images.map((img) => (
                <MediaCard key={img}>
                  <Image src={img} fill alt="Screenshot" />
                </MediaCard>
              ))}
            </ImageGrid>
          )}
        </Description>
      </InfoPanel>
    </>
  );
}
