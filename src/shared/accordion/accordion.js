import React, { useState } from "react";
import { Container, Details, Item, Title } from "./styles";
import { FiChevronDown, FiMinus } from "react-icons/fi";

export const Accordion = () => {
  const [height, setHeight] = useState(true);

  return (
    <Container>
      <Item>
        <Title>
          <FiChevronDown size={24} />
          Afghan Coal Exportation
        </Title>
        <Details>
          Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers throughout the
          prison to combat diseases…and it was a Roaring Success (as in Roaring Drunk) I mean
          we had Long lines of prisoners fist fighting to use them.{" "}
        </Details>
        <Title>
          <FiMinus size={24} />
          Indonesian Coal Exportation
        </Title>
        <Title>
          <FiMinus size={24} />
          Local Coal Exportation
        </Title>
        <Title>
          <FiMinus size={24} />
          Coal Mining
        </Title>
      </Item>
    </Container>
  );
};
