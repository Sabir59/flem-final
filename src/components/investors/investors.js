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

export const Investors = () => {
  return (
    <ContainerMain>
      <Container>
        <Title>Investors</Title>
        <Content>
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
        </Content>
      </Container>
    </ContainerMain>
  );
};
