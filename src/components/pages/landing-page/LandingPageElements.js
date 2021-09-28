import styled, { keyframes } from "styled-components";

const move = keyframes`
  0%  { transform: translateY(-5px);  }
  50%  { transform: translateY(10px); }
  100%  { transform: translateY(-5px); }
`;

export const Landingpage = styled.div`
  width: 100%;
  height: 45vw;
  background-color: #0a0b10;
  display: flex;
  color: #ffffff;
  justify-content: center;
  position: relative;
`;

export const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
`;
export const PinkBlob = styled.div`
  width: calc(15%+15vw);
  position: absolute;
  right: 0;
  top: calc(10rem + 5vw);
  z-index: 6;
`;
export const WhiteBlob = styled.div`
  width: calc(20%+20vw);
  position: absolute;
  right: calc(9rem + 4vw);
  top: calc(2rem + 2vw);
  z-index: 5;
`;
export const PurpleBlob = styled.div`
  width: calc(30%+30vw);
  position: absolute;
  right: 0;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: left;
    align-items: left;
    width: 100vw;
  }
`;

export const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #566573;
  color: #FFFFFF;
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

export const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #2544D4;
  margin-right: 0.5rem;
`;

export const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;

export const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: #85929E;
`;

export const CTA = styled.button` 
  background-color: #ffffff;
  color: #0a0b10;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: transform 0.2s;
  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--white);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

export const ManImage = styled.img`
  max-width: 80%;
  width: calc(20% + 20vw);
  height: calc(40% + 40vh);
  z-index: 7;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;