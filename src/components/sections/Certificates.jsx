import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 24px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  background: transparent;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  background: linear-gradient(225deg, #6B46C1 0%, #F472B6 100%);
  color: ${({ theme }) => theme.text_primary};
  box-shadow: 0 6px 18px rgba(107,70,193,0.12);
  margin: 0 auto 18px auto;
  display: block;
  max-width: 320px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 40px;
  text-align: center;
  font-weight: 700;
  margin: 8px 0 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const Sub = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 24px;
  font-weight: 600;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
`;

const Item = styled.li`
  margin: 12px 0;
  padding: 12px 16px;
  border-radius: 8px;
  background: rgba(255,255,255,0.02);
  color: ${({ theme }) => theme.text_primary};
`;

const Bold = styled.span`
  font-weight: 700;
`;

const Certificates = () => {
  return (
    <Container id="Certificates">
      <Wrapper>
        <LinkButton href="https://drive.google.com/file/d/1LZ3kcZ9T3wmVkq5s1F9QwD7GC9WIJJm-/view?usp=drivesdk " target="_blank" rel="noopener noreferrer">
          View Full Certificate
        </LinkButton>
        <Title>CERTIFICATES</Title>
        <Sub>
          A few certificates and selected achievements from my learning and extracurricular activities.
        </Sub>

        <List>
          <Item>
            <Bold>Java – Beginners to Masters (Udemy)</Bold>
            <div>Completed comprehensive training from beginner to advanced level in Java programming.</div>
          </Item>

          <Item>
            <Bold>Certificate of Achievement – INNOVATUM Web-Xplore 2022</Bold>
            <div>Developed &amp; hosted a website, contributing to India Book of Records for Maximum Websites Launched.</div>
          </Item>
        </List>

        <Title>ACHIEVEMENTS / EXTRACURRICULAR</Title>
        <List>
          <Item>
            <Bold>Star Pitch, E-Cell Contest</Bold>
            <div>1st place for presenting a solution to a real-world problem conducted by the Entrepreneurship Cell at Sir MVIT.</div>
          </Item>

          <Item>
            <Bold>Event Management at Verve</Bold>
            <div>Volunteered at Verve, a cultural festival organized at Sir MVIT.</div>
          </Item>
        </List>
      </Wrapper>
    </Container>
  );
};

export default Certificates;
