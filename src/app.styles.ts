import { css } from '@emotion/css';
import styled from '@emotion/styled';
import BreakPoints from './components/styles/breakpoints';

export const appStyles = {
  background: (background?: string) => css({
    background,
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: 0,
    left: 0,
  }),
  container: css({
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 50,
    alignItems: 'center',
      width: '90%',

    '@media only screen and (max-width: 768px)': {
      top: '10%',
    }
  }),
  subtitle: css({
    margin: '24px 0',
    textAlign: 'center',
    '@media only screen and (max-width: 768px)': {
      margin: '16px 0',
    }
  }),
  sectionTitle: css({
    marginTop: 34,
    '@media only screen and (max-width: 768px)': {
      marginTop: 22,
    }

  }),
  companiesContainer: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 8px 0 12px;
    ${BreakPoints.sm} {
      flex-direction: column;
    }
  `
}