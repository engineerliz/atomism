import { css } from '@emotion/css';
import styled from '@emotion/styled';

export const appStyles = {
  background: (background?: string) => css({
    background,
    height: "100vh",
    width: "100vw",
  }),
  container: css({
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
      width: '90%',

    '@media only screen and (max-width: 768px)': {
      top: '20%',
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
    '@media only screen and (max-width: 768px)': {
      flex-direction: column;
      margin-top: 20px;
    }
  `
}