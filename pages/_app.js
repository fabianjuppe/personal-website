import { useState, useEffect, createContext } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles";
import { t } from "@/lib/translations";
import Head from "next/head";
import { IconLink } from "@/styles/shared";
import {
  GitHubIcon,
  LinkedInIcon,
  XingIcon,
  MailIcon,
} from "@/components/Icons";

export const AppContext = createContext();

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 0 20px;
  font-family: "SF Mono", "Fira Code", monospace;
  font-size: 0.75rem;
  color: #8892b0;
  background: #0a192f;
`;

const LeftIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Switch = styled.div`
  display: flex;
  background: #112240;
  border-radius: 999px;
  padding: 4px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  position: relative;
  user-select: none;

  &:hover {
    button:not([data-active="true"]) {
      color: #64ffda;
    }
  }
`;

const Slider = styled.div`
  position: absolute;
  top: 4px;
  bottom: 4px;
  width: 45%;
  border-radius: 999px;
  background: #64ffda;
  transition: transform 0.3s ease;

  transform: ${({ $language }) =>
    $language === "en" ? "translateX(100%)" : "translateX(0%)"};
`;

const Option = styled.button`
  border: none;
  background: transparent;
  color: #ccd6f6;
  font-family: "SF Mono", "Fira Code", monospace;
  font-size: 0.75rem;
  padding: 6px 12px;
  border-radius: 999px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: color 0.2s ease;

  ${({ active }) =>
    active &&
    `
    color: #0a192f;
    font-weight: 600;
    `}
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem 0 1.5rem;
  font-family: "SF Mono", "Fira Code", monospace;
  font-size: 0.75rem;
  color: #8892b0;
  background: #0a192f;
`;

const FooterLink = styled.a`
  color: #8892b0;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #64ffda;
  }
`;

export default function App({ Component, pageProps }) {
  const [language, setLanguage] = useState("de");
  const [portfolio, setPortfolio] = useState("web");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) setLanguage(savedLanguage);

    const savedPortfolio = localStorage.getItem("portfolio");
    if (savedPortfolio) setPortfolio(savedPortfolio);

    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) localStorage.setItem("language", language);
  }, [language, mounted]);

  useEffect(() => {
    if (mounted) localStorage.setItem("portfolio", portfolio);
  }, [portfolio, mounted]);

  function toggleLanguage(language) {
    setLanguage(language);
  }

  function togglePortfolio(portfolio) {
    setPortfolio(portfolio);
  }

  if (!mounted) return null;

  return (
    <AppContext.Provider value={{ language, portfolio, togglePortfolio }}>
      <GlobalStyle />

      <Head>
        <title>Fabian Juppe Portfolio</title>
        <meta name="description" content="Fabian Juppe Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppWrapper>
        <TopBar>
          <LeftIcons>
            <IconLink
              href="https://github.com/fabianjuppe"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconLink>

            <IconLink
              href="https://linkedin.com/in/fabianjuppe"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconLink>

            <IconLink
              href="https://www.xing.com/profile/Fabian_Juppe"
              target="_blank"
              rel="noreferrer"
              aria-label="Xing"
            >
              <XingIcon />
            </IconLink>

            <IconLink href="mailto:fabian.juppe@web.de" aria-label="Email">
              <MailIcon />
            </IconLink>
          </LeftIcons>

          <Switch
            onClick={() => toggleLanguage(language === "de" ? "en" : "de")}
          >
            <Slider $language={language} />

            <Option data-active={language === "de"} active={language === "de"}>
              DE
            </Option>
            <Option data-active={language === "en"} active={language === "en"}>
              EN
            </Option>
          </Switch>
        </TopBar>

        <div style={{ flex: 1 }}>
          <Component {...pageProps} />
        </div>

        <Footer>
          <span>&copy; 2026 Fabian Juppe</span>
          <FooterLink href="/legal-notice">
            {t.legalNotice[language]}
          </FooterLink>
        </Footer>
      </AppWrapper>
    </AppContext.Provider>
  );
}
