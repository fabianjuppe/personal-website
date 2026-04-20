import { useContext } from "react";
import { AppContext } from "./_app";
import { legalNotice } from "@/lib/legal-notice";
import { t } from "@/lib/translations";
import {
  Page,
  Wrapper,
  Title,
  Headline,
  Description,
  BackLink,
} from "@/styles/shared";
import { BackIcon } from "@/components/Icons";

export default function LegalNotice() {
  const { language } = useContext(AppContext);

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
