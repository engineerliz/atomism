import React, { useState } from 'react';
import { cardStyles } from './card.styles';

interface CardProps {
  frontColor?: string;
  backColor?: string;
  width?: number | string;
  height?: number | string;
}

export const Card = ({
  frontColor,
  backColor,
  width,
  height,
}: CardProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  return (
    <div
      className={cardStyles.container(width, height, isHovering)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={cardStyles.backCard(backColor, isHovering)} />
      <div className={cardStyles.frontCard(frontColor, isHovering)}></div>
    </div>
  )
}