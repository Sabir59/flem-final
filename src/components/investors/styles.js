import styled from "styled-components";
import Member1 from "../../assets/member-01.avif";

export const Container = styled.section`
  padding: 60px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;

  > * {
    background-image: linear-gradient(124deg, #000000 0%, rgba(0, 0, 0, 0.21) 100%),
      url(${Member1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 40px 28px;
    flex: 0 0 550px;
    margin-top: 60px;
    min-height: 350px;
  }
`;

export const Right = styled.div``;

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

// Person

export const Member = styled.div``;

export const Description = styled.div``;

export const Name = styled.h4`
  line-height: 0;
    white-space: pre;
    font-weight: 500;
    color: #f09433;
    font-size: 22px;
  }
`;

export const Label = styled.small`
  display: block;
  margin-top: 3px;
  font-weight: 300;
  font-size: 17px;
  color: #fff;
`;

export const Intro = styled.p`
  margin-top: 14px;
  max-width: 247px;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  font-weight: 300;
  color: #d0cdcd;
  font-size: 15px;
`;
