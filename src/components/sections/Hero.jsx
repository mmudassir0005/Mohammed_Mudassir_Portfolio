import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImage.jpg";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 2;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  order: 1;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

     &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1 / 1;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  overflow: hidden;

  @media (max-width: 640px) {
    max-width: 280px;
  }
`;

const MotionImg = motion(Img);

const ImageWrapper = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 420px;
`;

const MotionBg = styled.div`
  position: absolute;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, rgba(99,102,241,0.14), rgba(99,102,241,0.06) 40%, transparent 60%);
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 640px) {
    width: 260px;
    height: 260px;
  }
`;

const MotionBg2 = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle at 65% 70%, rgba(255,99,132,0.10), rgba(255,99,132,0.02) 40%, transparent 60%);
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 640px) {
    width: 200px;
    height: 200px;
  }
`;

const MotionBand = styled.div`
  position: absolute;
  width: 520px;
  height: 80px;
  border-radius: 40px;
  background: linear-gradient(90deg, rgba(107,70,193,0.18), rgba(244,114,182,0.08));
  filter: blur(18px);
  z-index: 0;
  top: 62%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.9;
  @media (max-width: 640px) {
    width: 360px;
    height: 60px;
  }
`;

const DesignerShape = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 640px) {
    width: 300px;
    height: 300px;
  }
  svg {
    width: 100%;
    height: 100%;
    filter: blur(6px) saturate(1.1);
    opacity: 0.75;
    mix-blend-mode: screen;
  }
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <div>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <div>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </div>

              <div>
                <SubTitle>{Bio.description}</SubTitle>
              </div>

              <ResumeButton href={Bio.resume} target="_blank">
                Check Resume
              </ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
              <div>
                <ImageWrapper>
                  <motion.div
                    initial={{ scale: 0.9, rotate: 0, opacity: 0.75 }}
                    animate={{ scale: 1.05, rotate: 12, opacity: 1 }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 6, ease: "easeInOut" }}
                    style={{ position: "absolute", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 0 }}
                  >
                    <MotionBg />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 1.02, rotate: 0, opacity: 0.6 }}
                    animate={{ scale: 0.96, rotate: -10, opacity: 0.9 }}
                    transition={{ repeat: Infinity, repeatType: "mirror", duration: 8, ease: "easeInOut" }}
                    style={{ position: "absolute", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 0 }}
                  >
                    <MotionBg2 />
                  </motion.div>
                  <motion.div
                    initial={{ rotate: 0, opacity: 0.45 }}
                    animate={{ rotate: 360, opacity: 0.65 }}
                    transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
                    style={{ position: "absolute", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 0 }}
                  >
                    <DesignerShape>
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                        <defs>
                          <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#6B46C1" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#F472B6" stopOpacity="0.18" />
                          </linearGradient>
                        </defs>
                        <path d="M43.9,-62.2C56.7,-53.9,68.1,-44.4,74.1,-31.8C80.1,-19.2,80.7,-3.6,77.3,10.2C73.9,24,66.5,36.3,56.3,46.8C46.1,57.3,33.3,66,18.7,70.8C4.1,75.6,-11.9,76.6,-27.8,74.3C-43.7,72.1,-59.4,66.6,-68.6,55.2C-77.8,43.9,-80.5,26.8,-80.3,9.5C-80.1,-7.8,-77,-25.3,-69.8,-39.6C-62.6,-53.9,-51.3,-64,-37.6,-72.2C-23.9,-80.4,-11.9,-86.9,1.9,-89.6C15.8,-92.3,31.6,-91.2,43.9,-62.2Z" transform="translate(100 100)" fill="url(#g1)" />
                      </svg>
                    </DesignerShape>
                  </motion.div>
                  <motion.div
                    initial={{ x: -40, opacity: 0.7 }}
                    animate={{ x: [ -40, 40, -40 ] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                    style={{ position: "absolute", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 0 }}
                  >
                    <MotionBand />
                  </motion.div>
                  <Tilt style={{ zIndex: 1 }}>
                    <MotionImg
                      src={HeroImg}
                      alt="Hero"
                      initial={{ y: 0 }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ scale: 1.06, y: -12 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ zIndex: 1 }}
                    />
                  </Tilt>
                </ImageWrapper>
              </div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
