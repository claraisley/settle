import React from "react";
import KawaiiAnimation from "./backpackAnimation";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

const StaticPaper2 = styled(Paper)`
  width: 90%;
  margin: 10px auto;
  background-color: #353c52;
  justify-content: center;
  align-items: center;
  padding: 1%;
`;
const Title = styled.h1`
  text-align: center;
  margin: 20px auto;
  marin-top: 5%;
`;
const Text = styled.p`
  line-height: 1.5;
  font-size: 1.5em;
  font-weight: normal;
  margin: 15px;
  flex-wrap: wrap;
`;
const BackpackBox = styled.div`
  margin-top: 2%;
  margin-bottom: 5%;
  display: flex;
  justify-content: center;
`;
const StyledHREF = styled.a`
  color: white;
`;

const Cactus = styled.img`
  height: 200px;
  width: 200px;
`;

export default function About() {
  return (
    <main>
      <BackpackBox>
        <Cactus src="https://res.cloudinary.com/dpfixnpii/image/upload/v1582608002/cactus_wxnhwz.svg" />
      </BackpackBox>
      <Title>Who are we?</Title>
      <StaticPaper2 elevation={10}>
        <Text>
          SETTLE is a wellness app that aims to help users manage and cope with
          the symptoms of Test Anxiety. Geared towards secondary-school
          students, our app aims to introduce teens to the practice of
          mindfulness and cognitive behavioural therpay. Settle is rooted in the
          continuing goal of empowering its users with the tools and knowledge
          they need to modify the dysfunctional patterns of thinking
          associated with anxiety.{" "}
        </Text>
      </StaticPaper2>
      <Title>Attributions</Title>
      <StaticPaper2 elevation={10}>
        <Text>
          The inspiration and source material for this application comes from a{" "}
          <StyledHREF href="https://www.anxietycanada.com/sites/default/files/Test_Anxiety_Booklet.pdf">
            Test Anxiety Booklet{" "}
          </StyledHREF>
          released in coordination with Anxiety Canada.{" "}
        </Text>
        <Text>
          The meditations are original Test Anxiety-specifc meditations
          gracioulsy created by the Toronto-based artist{" "}
          <StyledHREF href="https://www.emilydawndickinson.com/">
            Emily Dickinson
          </StyledHREF>
          .
        </Text>
        <Text>
          Work-Through concept and material is original
          content by
          <StyledHREF href="https://www.linkedin.com/in/katherine-szelag/">
            {" "}
            Katherine Szelag{""}
          </StyledHREF>
          .
        </Text>
      </StaticPaper2>
    </main>
  );
}
