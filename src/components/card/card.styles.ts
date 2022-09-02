import { css } from '@emotion/css';

export const cardStyles = {
  container: (
    width?: number | string,
    height?: number | string,
    isHovering?: boolean,
  ) => css({
    width,
    height,
    position: 'relative',
    perspective: isHovering ? 80 : 100,
    margin: 20,
    transition: 'all 0.4s ease',
  }),
  card: css({
    height: '100%',
    width: '100%',
    position: 'absolute',
    borderRadius: 30,
    border: '1px solid black',
    transition: 'all 0.4s ease',
  }),
  frontCard: (
    color?: string,
    isHovering?: boolean,
  ) => css(cardStyles.card, {
    background: color,
    left: 0,
    bottom: 0,
    transform: isHovering ? 'rotatey(0deg)' : 'rotatey(-2deg)',
  }),
  backCard: (
    color?: string,
    isHovering?: boolean,
  ) => css(cardStyles.card, {
    background: color,
    left: isHovering ? 0 : 8,
    bottom: isHovering ? 0 : 8,
    transform: isHovering ? 'rotatey(0deg)' : 'rotatey(-2deg)',
  }),
}