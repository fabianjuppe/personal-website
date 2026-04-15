import { useState, useEffect, createContext } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles";
import { t } from "@/lib/translations";

export const LanguageContext = createContext();

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

const RightSwitch = styled.div`
  display: flex;
`;

const SwitchWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
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

const Slider = styled.div`
  position: absolute;
  top: 4px;
  bottom: 4px;
  width: 45%;
  border-radius: 999px;
  background: #64ffda;
  transition: transform 0.3s ease;

  transform: ${({ language }) =>
    language === "en" ? "translateX(100%)" : "translateX(0%)"};
`;

const IconRow = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  gap: 1rem;
  z-index: 1000;
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

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 7h4l4 7-4 7H3l4-7-4-7z" />
    <path d="M17 3h4l-6 10 6 8h-4l-6-8 6-10z" />
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export default function App({ Component, pageProps }) {
  const [language, setLanguage] = useState("de");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  function toggleLanguage(lang) {
    setLanguage(lang);
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <GlobalStyle />

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

          <RightSwitch>
            <Switch
              onClick={() => toggleLanguage(language === "de" ? "en" : "de")}
            >
              <Slider language={language} />

              <Option
                data-active={language === "de"}
                active={language === "de"}
              >
                DE
              </Option>
              <Option
                data-active={language === "en"}
                active={language === "en"}
              >
                EN
              </Option>
            </Switch>
          </RightSwitch>
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
    </LanguageContext.Provider>
  );
}
