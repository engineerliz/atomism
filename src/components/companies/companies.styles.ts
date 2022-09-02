import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Colors } from '../styles/colors';

export const companiesStyles = {
  container: css({
    
  }),
  companyCard: css({
    padding: '18px 24px 24px',
    background: 'rgba(255, 255, 255, 0.2)',
    width: 'fit-content',
    borderRadius: 10,
    cursor: 'pointer',
    transition: 'all 0.5s ease',
    margin: 10,
    maxWidth: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    ':hover': {
      background: 'rgba(255, 255, 255, 0.5)',
      transform: 'scale(1.07)'
    },
    ':active': {
      ':hover': {
      background: 'rgba(255, 255, 255, 0.5)',
      transform: 'scale(1.07)'
    },
    ':focus': {
      background: 'rgba(255, 255, 255, 0.5)',
      transform: 'scale(1.07)'
    }
    }
  }),
  title: css({
    marginBottom: 6,
  }),
  hashtags: styled.div`
    display: flex;
    margin-top: 12px;
    flex-wrap: wrap;
  `,
  hashtag: styled.div`
    background: ${Colors.Black};
    width: fit-content;
    border-radius: 6px;
    padding: 4px 8px;
    margin-right: 6px;
    margin-top: 4px;
  `
}