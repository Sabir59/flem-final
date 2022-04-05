import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { ContainerMain } from "../../globalStyles";
import { Container, Content, Left, Right, SubTitle, Text, Title } from "./styles";

export const Partners = () => {
  // const position = Content.getBoundingClientRect();

  const target = useRef(null);

  useEffect(() => {
    const element = target.current;
    const position = element.getBoundingClientRect();

    window.addEventListener("scroll", function () {
      console.log(position.top);
    });
  });

  return (
    <ContainerMain>
      <Container>
        <Title>Partners</Title>
        <Content ref={target}>
          <Left>
            <SubTitle>Lucky Cement Factory</SubTitle>
            <Text>
              Custom Hooks are a mechanism to reuse stateful logic (such as setting up a
              subscription and remembering the current value), but every time you use a custom
              Hook, all state and effects inside of it are fully isolated. How does a custom
              Hook get isolated state? Each call to a Hook gets isolated state.Custom Hooks are
              a mechanism to reuse stateful logic (such as setting up a subscription and
              remembering the current value.
            </Text>
          </Left>
          <Right></Right>
        </Content>
      </Container>
    </ContainerMain>
  );
};
