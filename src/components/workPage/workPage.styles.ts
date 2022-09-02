import { css } from '@emotion/css';
import styled from '@emotion/styled';
import BreakPoints from '../styles/breakpoints';
import { Colors } from '../styles/colors';

export const workPageStyles = {
  container: styled.div`
    position: relative;
    width: 60%;
    margin: 80px auto;
    padding-top: 60px;
    ${BreakPoints.md} {
      width: 90%;
      margin: 20px auto;
    }
  `,
  title: css({
    marginBottom: 4,
  }),
  images: styled.div`
    width: 80%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${BreakPoints.md} {
      width: 100%;
    }
  `,
  image: css({
    width: '100%',
    marginBottom: 10,
  }),
  diamond: css({
    height: 40,
    position: 'absolute',
    left: '50%',
    top: 0,
    transform: 'translate(-50%, 0)',
    cursor: 'pointer',
  }),
  companyLink: css({
    margin: '12px 0',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ':hover': {
      color: Colors.Gray.V7
    }
  })
}