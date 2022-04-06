import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  max-width: 355px;
`;

export const Item = styled.div``;

export const Title = styled.h3`
  white-space: pre;
  font-weight: 500;
  color: #e2b659;
  font-size: 18px;
  line-height: 2;
  margin-top: 16px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Details = styled.p`
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  font-weight: 200;
  font-size: 15px;
  line-height: 189.68%;
  max-width: 310px;
  margin-left: 36px;
  max-height: 0;
  overflow: hidden;
  transition:all .4s;

  ${(props) =>
    props.noHeight &&
    css`
      max-height: 1200px;
      overflow: visible;
    `} }
`;
