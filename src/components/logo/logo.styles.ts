import { css, keyframes } from '@emotion/css';
import styled from '@emotion/styled';

const bounce = keyframes`
  from { 
    transform: translate(0, 15px); 
  }
  to { 
    transform: translate(0, 0px); 
  }
`
export const logoStyles = {
  container: styled.div`
    width: fit-content;
  `,
  text: css({
    height: 100,
    '@media only screen and (max-width: 768px)': {
      height: 50,
    }
  }),
  diamond: css({
    height: 120,
    '@media only screen and (max-width: 768px)': {
      height: 70,
    },
    margin: '0 10px',
    animation: `${bounce} ease-in 1.2s infinite alternate`,
  })
}