import { List } from 'immutable';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Colors } from '../styles/colors';
import { Paragraph, Subheading } from '../styles/fonts';
import { companiesStyles } from './companies.styles';

export interface PortfolioItemProps {
  id: string;
  name: string;
  description: string;
  logo: string;
  link?: string;
  images: List<string>;
  hashtags?: List<string>;
}
const PortfolioItem = ({
  name,
  description,
  id,
  link,
  logo,
  hashtags,
}: PortfolioItemProps) => {
  const navigate = useNavigate();
  return (
    <div
      className={companiesStyles.companyCard}
      onClick={() => navigate(`/work/${id}`)}
    >
      <div>
        <Subheading.SH22 className={companiesStyles.title}>
          {name}
        </Subheading.SH22>
        <Paragraph.P14>{description}</Paragraph.P14>
      </div>
      {hashtags && (
        <companiesStyles.hashtags>
          {hashtags.map((tag) => (
            <companiesStyles.hashtag key={tag}>
              <Subheading.SH14 color={Colors.White}>{tag}</Subheading.SH14>
            </companiesStyles.hashtag>
          ))}
        </companiesStyles.hashtags>
      )}
    </div>
  );
};

export default PortfolioItem;
