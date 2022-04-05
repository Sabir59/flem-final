import styled from "styled-components";

export const Container = styled.section``;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 150px;
`;

export const Left = styled.div`
  flex: 1;
`;

export const Right = styled.div``;

export const Text = styled.p`
  max-width: 928px;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  font-weight: 200;
  font-size: 30px;
  /* line-height: 2; */
  line-height: 1.8;
`;

export const Title = styled.h2`
  white-space: pre;
  font-weight: 500;
  font-size: 230px;
  line-height: 1.2;
  margin-top: -20px;
`;
