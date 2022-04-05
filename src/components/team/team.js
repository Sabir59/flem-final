import React from "react";
import { Box, ContainerMain } from "../../globalStyles";
import {
  Container,
  Content,
  Description,
  Intro,
  Label,
  Left,
  Member,
  Name,
  Right,
  Text,
  Title,
} from "./styles";

export const Team = () => {
  return (
    <ContainerMain>
      <Container>
        <Title>Our Team</Title>
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
            <Member>
              <Description>
                <Box>
                  <Name>Amir Sohail</Name>
                  <Label>Sr. Manager</Label>
                </Box>
                <Intro>
                  It is a method used to clone an element from one list to another list. The
                  cloneNode(), provided by javascript, the method
                </Intro>
              </Description>
            </Member>
          </Right>
        </Content>
      </Container>
    </ContainerMain>
  );
};
