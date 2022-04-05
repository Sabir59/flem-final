import styled from "styled-components";
import Partener1 from "../../assets/partener-01.jpeg";

export const Container = styled.section``;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Left = styled.div`
  flex: 1;
`;

export const Right = styled.div`
  background-image: linear-gradient(124deg, #000000 0%, rgba(0, 0, 0, 0.21) 100%),
    url(${Partener1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 24px;
  flex: 0 0 380px;
  margin-top: 60px;
`;

export const Text = styled.p`
  max-width: 834px;
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

export const SubTitle = styled.h2`
  white-space: pre;
  font-weight: 800;
  font-style: normal;
  font-family: "Poppins", serif;
  color: #e08b31;
  font-size: 50px;
  letter-spacing: 0px;
  line-height: 1.2;
  margin-bottom: 30px;
`;
