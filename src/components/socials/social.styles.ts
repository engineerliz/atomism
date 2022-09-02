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
export const socialStyles = {
  container: styled.div`
   display: flex;
   flex-direction: row;
   position: relative;
  `,
  iconButton: styled.div`
    width: 50px;
    height: 50px;
    background: #000000;
    border-radius: 100px;
    position: relative;
    margin: 0 6px;
    cursor: pointer;
    transition: all 0.4s ease;
    :hover {
      background: #5a5a5a;
    }
  `,
  icon: css({
    width: '60%',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
  }),
  
  text: css({
    height: 100,
  }),
  diamond: css({
    height: 120,
    margin: '0 10px',
    animation: `${bounce} ease-in 1.2s infinite alternate`,
  })
}