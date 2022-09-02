import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Colors } from '../styles/colors';

export const workPageStyles = {
  container: styled.div`
    position: relative;
    width: 60%;
    margin: 80px auto;
  `,
  title: css({
    marginBottom: 4,
  }),
  images: styled.div`
    width: 80%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
  `,
  image: css({
    width: '100%',
    marginBottom: 10,
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