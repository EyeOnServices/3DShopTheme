import React, { useState } from 'react';
import styled from 'styled-components';
import { FaLock } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { useDispatch } from 'react-redux';
import { setSelectedColor } from '../store/appSlice';

export type Color = {
    id: number;
    name: string;
    hex: string;
    sec: string;
    locked: boolean;
}

const colors: Color[] = [
    { id: 1, name: 'Amazonite', hex: '#9c4037', sec: '#e0a18a', locked: false },
    { id: 2, name: 'Amber', hex: '#da4900', sec: '#ff7c35', locked: true },
    { id: 3, name: 'Amethyst', hex: '#462f99', sec: '#b1a8d7', locked: false },
    { id: 4, name: 'Calcite', hex: '#829292', sec: '#e8eeec', locked: false },
    { id: 5, name: 'Clorophyll', hex: '#736d6f', sec: '#d4d9d3', locked: false },
    { id: 6, name: 'corundum', hex: '#acd18e', sec: '#f8faec', locked: false },
    { id: 7, name: 'Latte', hex: '#937551', sec: '#e5ddd0', locked: false },
];

type ColorDivProps = {
    color: Color;
    onSelect: (id: number) => void;
    onToggleLock: (id: number) => void;
}

type ColorWheelProps = {
    colors: Color[];
    onColorSelect: (color: Color) => void;
}


const ColorWheelContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  overflow: hidden;
`;

const ColorButton = styled.button<{ angle: number; }> `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${props => props.angle}deg) translate(0, -130px);
  width: 30px;
  height: 50px;
  background-color: ${props => props.color};
  border: none;
  cursor: pointer;
`;
const ColorContainer = styled.div<{ hex: string; locked: boolean }>`
  background-color: ${props => props.hex};
  width: 100px;
  height: 100px;
  margin: 10px;
  border : 2px solid #fff;
  border-radius : 16px;
  cursor: ${props => props.locked ? 'default' : 'pointer'};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  z-index: 2;

`;

const LockIcon = styled(FaLock)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 20px;
  margin: 5px;
`;



const ColorWheel = () => {
    const [selectedColors, setSelectedColors] = useState<Color[]>([]);
    const dispatch = useDispatch();

    const toggleLock = (id: number) => {
        const updatedColors = colors.map(color =>
            color.id === id ? { ...color, locked: !color.locked } : color
        );
        setSelectedColors(updatedColors);
    }

    const selectColor = (id: number) => {
        const selectedColor = colors.find(color => color.id === id);
        // const isSelected = selectedColors.some(color => color.id === id); if we want to eliminate selected ones
        if (selectedColor) {
            setSelectedColors([...selectedColors, selectedColor]);
            dispatch(setSelectedColor(selectedColor));
        }
    }

    const ColorDiv = ({ color, onSelect, onToggleLock }: ColorDivProps) => (
        <ColorContainer hex={color.hex} locked={color.locked} onClick={!color.locked ? () => onSelect(color.id) : undefined}>
            {color.name}
            {color.locked && <LockIcon />}
            {color.locked && <LockIcon onClick={() => onToggleLock(color.id)} />}

        </ColorContainer>
    );

    return (
        <>
            <WheelContainer>
                {colors.map(color => (
                    <ColorDiv key={color.id} color={color} onSelect={selectColor} onToggleLock={toggleLock} />
                ))}
            </WheelContainer>

        </>
    );
}

export default ColorWheel;

const WheelContainer = styled.div`
display : flex;
align-items : center;

`