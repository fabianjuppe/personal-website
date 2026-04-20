import styled from "styled-components";
import { gameProjects, webProjects } from "@/lib/projects";
import Project from "@/components/Project";
import { Page, Subtitle, Title, Wrapper } from "@/styles/shared";
import { useContext } from "react";
import { AppContext } from "./_app";

const Name = styled(Title)`
  font-size: clamp(4.4rem, 2.5vw, 1.75rem);
`;

const Portfolio = styled(Subtitle)`
  font-size: clamp(2.4rem, 2.5vw, 1.75rem);
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

  transform: ${({ $portfolio }) =>
    $portfolio === "game" ? "translateX(108%)" : "translateX(0%)"};
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

/* const SlideViewport = styled.div`
  overflow: hidden;
  width: 100%;
`;

const SlideTrack = styled.div`
  display: flex;
  width: 200%;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ $portfolio }) =>
    $portfolio === "game" ? "translateX(-50%)" : "translateX(0%)"};
`;

const SlidePane = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`; */

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
          <Slider $portfolio={portfolio} />

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

        {/*         TODO */}
        {/*         <SlideViewport>
          <SlideTrack $portfolio={portfolio}>
            <SlidePane>
              {webProjects?.map((project, index) => (
                <Project key={project.title} project={project} index={index} />
              ))}
            </SlidePane>
            <SlidePane>
              {gameProjects?.map((project, index) => (
                <Project key={project.title} project={project} index={index} />
              ))}
            </SlidePane>
          </SlideTrack>
        </SlideViewport> */}

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
