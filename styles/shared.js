import styled, { keyframes } from "styled-components";
import Link from "next/link";

export const BackLink = styled(Link)`
  color: #ccd6f6;
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
    transform: translateY(0);
  }
`;

export const Category = styled.li`
  font-family: "SF Mono", "Fira Code", monospace;
  font-size: 0.78rem;
  font-weight: 900;
  color: #64ffda;
  white-space: nowrap;
`;

export const Description = styled.div`
  background: #112240;
  border-radius: 4px;
  padding: 1.25rem 1.5rem;
  font-size: 0.95rem;
  line-height: 1.65;
  color: #a8b2d8;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 100%;

  a {
    color: #64ffda;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Headline = styled.h3`
  font-family: "Calibre", "Inter", sans-serif;
  font-size: clamp(1.4rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: #ccd6f6;
  margin: 0;
`;

export const IconLink = styled.a`
  color: #a8b2d8;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
  display: flex;
  align-items: center;

  svg {
    width: ${({ $size }) => $size || "26px"};
    height: ${({ $size }) => $size || "26px"};
  }

  &:hover {
    color: #64ffda;
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const IconRow = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoPanel = styled.div`
  flex: 1 1 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const MediaCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

export const Page = styled.main`
  min-height: 100vh;
  background: #0a192f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const Subtitle = styled.h2`
  font-family: "SF Mono", "Fira Code", "Fira Mono", monospace;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  letter-spacing: 0.08em;
  font-weight: 400;
  color: #64ffda;
  margin: 0;
  text-align: center;
`;

export const TechItem = styled.li`
  font-family: "SF Mono", "Fira Code", monospace;
  font-size: 0.78rem;
  color: #8892b0;
  white-space: nowrap;
`;

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Title = styled.h1`
  font-family: "Calibre", "Inter", sans-serif;
  font-size: clamp(2.4rem, 4vw, 3.5rem);
  font-weight: 700;
  color: #ccd6f6;
  margin: 0;
  text-align: center;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth || "1000px"};
  animation: ${fadeUp} 0.6s ease both;
`;
