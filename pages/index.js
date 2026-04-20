import styled from "styled-components";
import { gameProjects, webProjects } from "@/lib/projects";
import Project from "@/components/Project";
import {
  Option,
  Page,
  Slider,
  Subtitle,
  Switch,
  Title,
  Wrapper,
} from "@/styles/shared";
import { useContext } from "react";
import { AppContext } from "./_app";

const Name = styled(Title)`
  font-size: clamp(4.4rem, 2.5vw, 1.75rem);
`;

const Portfolio = styled(Subtitle)`
  font-size: clamp(2.4rem, 2.5vw, 1.75rem);
`;

const ProjectSlider = styled(Slider)`
  transform: ${({ $portfolio }) =>
    $portfolio === "game" ? "translateX(108%)" : "translateX(0%)"};
`;

export default function Home() {
  const { portfolio, togglePortfolio } = useContext(AppContext);

  return (
    <Page>
      <Wrapper $maxWidth="2000px">
        <Name>Fabian Juppe</Name>
        <Portfolio>Portfolio</Portfolio>

        <Switch
          onClick={() => togglePortfolio(portfolio === "web" ? "game" : "web")}
        >
          <ProjectSlider $portfolio={portfolio} />

          <Option
            data-active={portfolio === "web"}
            active={portfolio === "web"}
          >
            Web Dev
          </Option>
          <Option
            data-active={portfolio === "game"}
            active={portfolio === "game"}
          >
            Game Dev
          </Option>
        </Switch>

        {portfolio === "game" &&
          gameProjects?.map((project, index) => (
            <Project key={project.title} project={project} index={index} />
          ))}

        {portfolio === "web" &&
          webProjects?.map((project, index) => (
            <Project key={project.title} project={project} index={index} />
          ))}
      </Wrapper>
    </Page>
  );
}
