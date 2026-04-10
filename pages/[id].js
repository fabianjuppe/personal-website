import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { projects } from "@/lib/projects";
import { useRouter } from "next/router";
import Link from "next/link";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Page = styled.main`
  min-height: 100vh;
  background: #0a192f;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 4rem 2rem;
`;

const BackLink = styled(Link)`
  color: #ccd6f6;
  cursor: pointer;
  text-decoration: none;
  font-size: 5rem;
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
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 50%;
  animation: ${fadeUp} 0.6s ease both;
  flex-direction: column;
`;

const ImageCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;

  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`;

const InfoPanel = styled.div`
  flex: 1 1 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  font-family: "Calibre", "Inter", sans-serif;
  font-size: clamp(3.4rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: #ccd6f6;
  margin: 0;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-family: "SF Mono", "Fira Code", "Fira Mono", monospace;
  font-size: clamp(2.4rem, 2.5vw, 1.75rem);
  letter-spacing: 0.08em;
  font-weight: 400;
  color: #64ffda;
  margin: 0 0 50px 0;
`;

const Headline = styled.h3`
  font-family: "Calibre", "Inter", sans-serif;
  font-size: clamp(1.4rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: #ccd6f6;
  margin: 0;
`;

const Description = styled.div`
  background: #112240;
  border-radius: 4px;
  padding: 1.25rem 1.5rem;
  font-size: 0.95rem;
  line-height: 1.65;
  color: #a8b2d8;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
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

const Category = styled.li`
  font-family: "SF Mono", "Fira Code", monospace;
  font-size: 0.78rem;
  font-weight: 900;
  color: #64ffda;
  white-space: nowrap;
`;

const IconRow = styled.div`
  display: flex;
  gap: 1rem;
  align-self: center;
`;

const IconLink = styled.a`
  color: #a8b2d8;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
  display: flex;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: #64ffda;
    transform: translateY(-2px);
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

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;

  const projectIndex = projects.findIndex((project) => project.id === id);
  const project = projects[projectIndex];

  if (!project) {
    return null;
  }

  return (
    <Page>
      <Wrapper>
        <BackLink href="/">←</BackLink>

        <Title>{project.title}</Title>
        {project.subtitle && <Subtitle>{project.subtitle}</Subtitle>}

        {project.video ? (
          <video
            src={project.video}
            poster={project.coverArt}
            controls
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <ImageCard>
            <Image src={project.coverArt} fill alt={project.coverArtAlt} />
          </ImageCard>
        )}

        <TechList>
          {project.programmingLanguages && (
            <>
              <Category>Programmiersprachen:</Category>
              {project.programmingLanguages.map((programmingLanguage) => (
                <TechItem key={programmingLanguage}>
                  {programmingLanguage}
                </TechItem>
              ))}
            </>
          )}

          {project.software && (
            <>
              <Category>Software:</Category>
              {project.software.map((software) => (
                <TechItem key={software}>{software}</TechItem>
              ))}
            </>
          )}

          {project.date && (
            <>
              <Category>Datum:</Category>
              <TechItem>{project.date}</TechItem>
            </>
          )}

          {project.contributors && (
            <>
              <Category>Mitwirkende:</Category>
              {project.contributors.map((contributor) => (
                <TechItem key={contributor}>{contributor}</TechItem>
              ))}
            </>
          )}

          {project.music && (
            <>
              <Category>Musik:</Category>
              <TechItem>{project.music}</TechItem>
            </>
          )}

          {project.sounds && (
            <>
              <Category>Sounds:</Category>
              <TechItem>{project.sounds}</TechItem>
            </>
          )}

          {project.roles && (
            <>
              <Category>Rolle:</Category>
              {project.roles.map((role) => (
                <TechItem key={role}>{role}</TechItem>
              ))}
            </>
          )}

          {project.developer && (
            <>
              <Category>Entwickler:</Category>
              <TechItem>{project.developer}</TechItem>
            </>
          )}

          {project.publisher && (
            <>
              <Category>Publisher:</Category>
              <TechItem>{project.publisher}</TechItem>
            </>
          )}
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
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label="External link"
            >
              <ExternalIcon />
            </IconLink>
          )}
        </IconRow>

        <InfoPanel>
          <Description>
            <Headline>Beschreibung</Headline>
            {project.description &&
              project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            {project.images && (
              <ImageWrapper>
                {project.images.map((image) => (
                  <ImageCard key={image}>
                    <Image src={image} fill alt="Screenshot" />
                  </ImageCard>
                ))}
              </ImageWrapper>
            )}
          </Description>
        </InfoPanel>

        {project.vektoria && (
          <>
            <Title>{project.vektoria.title}</Title>

            <ImageCard>
              <Image
                src={project.vektoria.coverArt}
                fill
                alt={project.vektoria.coverArtAlt}
              />
            </ImageCard>

            <TechList>
              <Category>Tech:</Category>
              {project.vektoria.programmingLanguages.map(
                (programmingLanguage) => (
                  <TechItem key={programmingLanguage}>
                    {programmingLanguage}
                  </TechItem>
                )
              )}
              {project.vektoria.software.map((software) => (
                <TechItem key={software}>{software}</TechItem>
              ))}

              <Category>Datum:</Category>
              <TechItem>{project.vektoria.date}</TechItem>

              {project.vektoria.contributors && (
                <>
                  <Category>Mitwirkende:</Category>
                  {project.vektoria.contributors.map((contributor) => (
                    <TechItem key={contributor}>{contributor}</TechItem>
                  ))}
                </>
              )}
            </TechList>

            <InfoPanel>
              <Description>
                <Headline>Beschreibung</Headline>
                {project.vektoria.description &&
                  project.vektoria.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                {project.vektoria.images && (
                  <ImageWrapper>
                    {project.vektoria.images.map((image) => (
                      <ImageCard key={image}>
                        <Image src={image} fill alt="Screenshot" />
                      </ImageCard>
                    ))}
                  </ImageWrapper>
                )}
              </Description>
            </InfoPanel>
          </>
        )}

        {project.unity && (
          <>
            <Title>{project.unity.title}</Title>

            <ImageCard>
              <Image
                src={project.unity.coverArt}
                fill
                alt={project.unity.coverArtAlt}
              />
            </ImageCard>

            <TechList>
              <Category>Tech:</Category>
              {project.unity.programmingLanguages.map((programmingLanguage) => (
                <TechItem key={programmingLanguage}>
                  {programmingLanguage}
                </TechItem>
              ))}
              {project.unity.software.map((software) => (
                <TechItem key={software}>{software}</TechItem>
              ))}

              <Category>Datum:</Category>
              <TechItem>{project.vektoria.date}</TechItem>

              {project.unity.contributors && (
                <>
                  <Category>Mitwirkende:</Category>
                  {project.unity.contributors.map((contributor) => (
                    <TechItem key={contributor}>{contributor}</TechItem>
                  ))}
                </>
              )}
            </TechList>

            <InfoPanel>
              <Description>
                <Headline>Beschreibung</Headline>
                {project.unity.description &&
                  project.unity.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                {project.unity.images && (
                  <ImageWrapper>
                    {project.unity.images.map((image) => (
                      <ImageCard key={image}>
                        <Image src={image} fill alt="Screenshot" />
                      </ImageCard>
                    ))}
                  </ImageWrapper>
                )}
              </Description>
            </InfoPanel>
          </>
        )}
      </Wrapper>
    </Page>
  );
}
