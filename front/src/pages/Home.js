import React from "react";
import styled from "styled-components";
import Team from "../components/HomeComponents/Team";
import Partner from "../components/HomeComponents/Partner";
import Motto from "../components/HomeComponents/Motto";
import Info from "../components/HomeComponents/Info";
import Signature from "../components/HomeComponents/Signature";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  color: white;
  padding: 1rem;
`;

function Home() {
  return (
    <HomeContainer>
      <Motto />
      <Info />
      <Signature />
      <Team />
      <Partner />
    </HomeContainer>
  );
}

export default Home;
