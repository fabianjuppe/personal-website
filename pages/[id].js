import Image from "next/image";
import { webProjects, gameProjects } from "@/lib/projects";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "./_app";
import { t } from "@/lib/translations";
import {
  Page,
  Wrapper,
  MediaCard,
  Title,
  Subtitle,
  Headline,
  Description,
  BackLink,
  InfoPanel,
  ImageGrid,
} from "@/styles/shared";
import { BackIcon } from "@/components/Icons";
import MetaList from "@/components/MetaList";
import ProjectLinks from "@/components/ProjectLinks";
import SubProject from "@/components/SubProject";

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { language } = useContext(AppContext);

  const projects = [...webProjects, ...gameProjects];
  const project = projects.find((p) => p.id === id);
  if (!project) return null;

  return (
    <Page>
      <Wrapper>
        <BackLink href="/">
          <BackIcon />
        </BackLink>

        <Title>{project.title}</Title>
        {project.subtitle?.[language] && (
          <Subtitle>{project.subtitle[language]}</Subtitle>
        )}

        {project.video ? (
          <MediaCard>
            <video
              src={project.video}
              poster={project.coverArt}
              controls
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </MediaCard>
        ) : (
          <MediaCard>
            <Image src={project.coverArt} fill alt={project.coverArtAlt} />
          </MediaCard>
        )}

        <MetaList project={project} language={language} />
        <ProjectLinks project={project} language={language} />

        <InfoPanel>
          <Description>
            <Headline>{t.contribution[language]}</Headline>
            {project.contribution?.[language].map((parapgraph) => (
              <p key={parapgraph}>{parapgraph}</p>
            ))}
          </Description>
        </InfoPanel>

        {project.description?.[language] && (
          <InfoPanel>
            <Description>
              <Headline>{t.description[language]}</Headline>
              {project.description?.[language].map((parapgraph) => (
                <p key={parapgraph}>{parapgraph}</p>
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
        )}

        {project.vektoria && (
          <SubProject project={project.vektoria} language={language} />
        )}
        {project.unity && (
          <SubProject project={project.unity} language={language} />
        )}
      </Wrapper>
    </Page>
  );
}
