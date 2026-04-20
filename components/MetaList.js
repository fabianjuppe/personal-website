import { Category, TechItem, TechList } from "@/styles/shared";
import { t } from "@/lib/translations";
import styled from "styled-components";

const ContributorLink = styled.a`
  color: #8892b0;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #64ffda;
  }
`;

export default function MetaList({ project, language }) {
  return (
    <TechList>
      {project.programmingLanguages && (
        <>
          <Category>{t.programmingLanguages[language]}</Category>
          {project.programmingLanguages.map((lang) => (
            <TechItem key={lang}>{lang}</TechItem>
          ))}
        </>
      )}
      {project.tools && (
        <>
          <Category>{t.tools[language]}</Category>
          {project.tools.map((tool) => (
            <TechItem key={tool}>{tool}</TechItem>
          ))}
        </>
      )}
      {project.date && (
        <>
          <Category>{t.date[language]}</Category>
          <TechItem>{project.date}</TechItem>
        </>
      )}
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
      {project.music && (
        <>
          <Category>{t.music[language]}</Category>
          <TechItem>{project.music}</TechItem>
        </>
      )}
      {project.sounds && (
        <>
          <Category>{t.sounds[language]}</Category>
          <TechItem>{project.sounds}</TechItem>
        </>
      )}
      {project.roles && (
        <>
          <Category>{t.role[language]}</Category>
          {project.roles[language].map((role) => (
            <TechItem key={role}>{role}</TechItem>
          ))}
        </>
      )}
      {project.developer && (
        <>
          <Category>{t.developer[language]}</Category>
          <TechItem>{project.developer}</TechItem>
        </>
      )}
      {project.publisher && (
        <>
          <Category>{t.publisher[language]}</Category>
          <TechItem>{project.publisher}</TechItem>
        </>
      )}
    </TechList>
  );
}
