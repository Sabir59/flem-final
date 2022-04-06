import React, { useState } from "react";
import { Container, Details, Item, Title } from "./styles";
import { FiChevronDown, FiMinus } from "react-icons/fi";
import * as data from "../../assets/dummyData";

export const Accordion = () => {
  const [active, setActive] = useState(false);

  const accordionData = data.accordionData.map(({ id, visible, title, details }, i) => {
    return (
      <Item key={id}>
        <Title
          onClick={() => {
            setActive(!active);
          }}
        >
          {active ? <FiMinus size={24} /> : <FiChevronDown size={24} />}
          {title}
        </Title>
        <Details noHeight={active}>{details}</Details>
      </Item>
    );
  });

  return <Container>{accordionData}</Container>;
};
