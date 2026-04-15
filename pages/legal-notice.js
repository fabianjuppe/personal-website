import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "./_app";
import { legalNotice } from "@/lib/legal-notice";
import { t } from "@/lib/translations";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Page = styled.main`
  min-height: 100vh;
  background: #0a192f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
`;

const Wrapper = styled.section`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  animation: ${fadeUp} 0.6s ease both;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BackLink = styled(Link)`
  color: #ccd6f6;
  cursor: pointer;
  text-decoration: none;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  svg {
    width: 40px;
    height: 40px;
  }

  &:hover {
    color: #64ffda;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0px);
  }
`;

const Title = styled.h1`
  font-family: "Calibre", "Inter", sans-serif;
  font-size: clamp(2.5rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: #ccd6f6;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-family: "SF Mono", "Fira Code", monospace;
  font-size: 0.9rem;
  font-weight: 400;
  color: #64ffda;
  letter-spacing: 0.05em;
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

  a {
    color: #64ffda;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Headline = styled.h3`
  font-family: "Calibre", "Inter", sans-serif;
  font-size: clamp(1.4rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: #ccd6f6;
  margin: 0;
`;

const BackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H5" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

export default function LegalNotice() {
  const { language } = useContext(LanguageContext);

  return (
    <Page>
      <Wrapper>
        <BackLink href="/">
          <BackIcon />
        </BackLink>

        <Title>{legalNotice.title[language]}</Title>

        <Description>
          <Headline>{legalNotice.subtitle[language]}</Headline>
          <p>Fabian Juppe</p>
          <p>87660 Irsee</p>
          <p>{t.germany[language]}</p>

          <Headline>{t.contact[language]}</Headline>
          <p>
            E-Mail: <a href="mailto:fabian.juppe@web.de">fabian.juppe@web.de</a>
          </p>
          <Headline>{t.disclaimer[language]}</Headline>

          <h4>{t.content[language]}</h4>
          <p>{legalNotice.content[language]}</p>

          <h4>{t.links[language]}</h4>
          <p>{legalNotice.links[language]}</p>

          <h4>{t.copyright[language]}</h4>
          <p>{legalNotice.copyright[language]}</p>

          <h4>{t.privacy[language]}</h4>
          <p>{legalNotice.privacy[language]}</p>
        </Description>
      </Wrapper>
    </Page>
  );
}
