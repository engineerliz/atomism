import styled from '@emotion/styled';
import BreakPoints from './breakpoints';
import { Colors } from './colors';

const headingFontWeight = 'font-weight: 800';

const Heading = {
  H62: styled.div`
    ${headingFontWeight};
    font-size: 62px;
    color: ${props => props.color || Colors.Black};
  `,
  H52: styled.div`
    ${headingFontWeight};
    font-size: 52px;
    color: ${props => props.color || Colors.Black};
  `,
  H42: styled.div`
    ${headingFontWeight};
    font-size: 42px;
    color: ${props => props.color || Colors.Black};
  `,
  H34: styled.div`
    ${headingFontWeight};
    font-size: 34px;
    color: ${props => props.color || Colors.Black};
  `,
  H26: styled.div`
    ${headingFontWeight};
    font-size: 26px;
    color: ${props => props.color || Colors.Black};
  `,
  H22: styled.div`
    ${headingFontWeight};
    font-size: 22px;
    color: ${props => props.color || Colors.Black};
  `,
  H18: styled.div`
    ${headingFontWeight};
    font-size: 18px;
    color: ${props => props.color || Colors.Black};
  `,
}

const subheadingFontWeight = 'font-weight: 600';

const Subheading = {
  SH22: styled.div`
    ${subheadingFontWeight};
    font-size: 22px;
    color: ${props => props.color || Colors.Black};
  `,
  SH18: styled.div`
    ${subheadingFontWeight};
    font-size: 18px;
    color: ${props => props.color || Colors.Black};
    ${BreakPoints.sm} {
      font-size: 14px;
    }
  `,
  SH14: styled.div`
    ${subheadingFontWeight};
    font-size: 14px;
    color: ${props => props.color || Colors.Black};
  `,
  SH12: styled.div`
    ${subheadingFontWeight};
    font-size: 12px;
    color: ${props => props.color || Colors.Black};
  `,
}

const paragraphFontWeight = 'font-weight: 400';

const Paragraph = {
  P22: styled.div`
    ${paragraphFontWeight};
    font-size: 22px;
    color: ${props => props.color || Colors.Black};
  `,
  P18: styled.div`
    ${paragraphFontWeight};
    font-size: 18px;
    color: ${props => props.color || Colors.Black};
  `,
  P14: styled.div`
    ${paragraphFontWeight};
    font-size: 14px;
    color: ${props => props.color || Colors.Black};
  `,
}


export {
  Heading,
  Subheading,
  Paragraph,
};