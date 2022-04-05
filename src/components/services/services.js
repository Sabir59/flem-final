import React from "react";
import { ContainerMain } from "../../globalStyles";
import { Accordion } from "../../shared";
import { Container, Content, Left, Right, Text, Title } from "./styles";

export const Services = () => {
  return (
    <ContainerMain>
      <Container>
      <Title>Services</Title>
        <Content>
          <Left>
            <Text>
              Custom Hooks are a mechanism to reuse stateful logic (such as setting up a
              subscription and remembering the current value), but every time you use a custom
              Hook, all state and effects inside of it are fully isolated. How does a custom
              Hook get isolated state? Each call to a Hook gets isolated state.Custom Hooks are
              a mechanism to reuse stateful logic (such as setting up a subscription and
              remembering the current value.
            </Text>
          </Left>
          <Right>
            <Accordion />
          </Right>
        </Content>
      </Container>
    </ContainerMain>
  );
};
