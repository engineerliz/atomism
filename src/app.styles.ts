import { css } from '@emotion/css';
import styled from '@emotion/styled';
import BreakPoints from './components/styles/breakpoints';

export const appStyles = {
  background: (background?: string) => css({
    background,
    height: "100vh",
    width: "100vw",
    position: 'fixed',
    top: 0,
    left: 0,
  }),
  container: css({
    position: 'absolute',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 50,
    alignItems: 'center',
      width: '90%',

    '@media only screen and (max-width: 768px)': {
      top: '15%',
    }
  }),
  subtitle: styled.div`
    font-size: 24px;
    font-weight: 600;
    margin: 24px 0 ;

    '@media only screen and (max-width: 768px)': {
      font-size: 20px;
      margin: 16px 0;
    }
  `,
  companiesContainer: styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    ${BreakPoints.sm} {
      flex-direction: column;
      margin-top: 20px;
    }
  `
}