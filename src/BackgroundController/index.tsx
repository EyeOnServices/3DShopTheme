import React, { ReactNode } from "react";
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
interface BackgroundControllerProps {
  children: ReactNode;
}

const BackgroundContainer = styled.div<{ selectedColorhex: string, selectedColorsec: string }>`
  background-color: ${(props) => props.selectedColorhex};
  position: absolute;
  width : 100vw;
  height : 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

const RectangleOne = styled.div<{ selectedColorhex: string, selectedColorsec: string }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 580px;
  height: 450px;
  background: linear-gradient(to top left, ${props => props.selectedColorhex}, ${props => props.selectedColorsec});
  border-radius: 0 0 580px 0;
`;

const RectangleTwo = styled.div<{ selectedColorhex: string, selectedColorsec: string }>`
  position: absolute;
  right: 0;
  top: 0;
  width: 580px;
  height: 450px;
  background: linear-gradient(to top right, ${props => props.selectedColorhex}, ${props => props.selectedColorsec});
  border-radius: 0 0 0 580px;
`;

const RectangleThree = styled.div<{ selectedColorhex: string, selectedColorsec: string }>`
  position: absolute;
  bottom: 0;
  width: 630px;
  height: 400px;
  background: linear-gradient(to top right, ${props => props.selectedColorhex}, ${props => props.selectedColorsec});
  border-radius: 630px 630px 0 0;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
`;



const BackgroundController = ({ children }: BackgroundControllerProps) => {

  const selectedColor = useSelector((state: RootState) => state.app.selectedColor);
  console.log(selectedColor);
  return (
    <>
      <BackgroundContainer selectedColorhex={selectedColor.hex} selectedColorsec={selectedColor.sec} />
      <RectangleOne selectedColorhex={selectedColor.hex} selectedColorsec={selectedColor.sec} ></RectangleOne>
      <RectangleTwo selectedColorhex={selectedColor.hex} selectedColorsec={selectedColor.sec} ></RectangleTwo>
      <RectangleThree selectedColorhex={selectedColor.hex} selectedColorsec={selectedColor.sec}  ></RectangleThree >
      {children}
    </ >
  );
};

export default BackgroundController;

