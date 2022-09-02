import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Background from '../background/Background';
import { getItem } from '../companies/portfolioWork';
import { companiesStyles } from '../companies/companies.styles';
import { PortfolioItemProps } from '../companies/PortfolioItem';
import { Colors } from '../styles/colors';
import { Heading, Subheading } from '../styles/fonts';
import { workPageStyles } from './workPage.styles';

const WorkPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState<PortfolioItemProps>();
  useEffect(() => {
    id && setItem(getItem(id));
  }, []);
  console.log('id', id);
  console.log('item', item);
  return (
    <div>
      <Background />
      <workPageStyles.container>
        <Heading.H34 className={workPageStyles.title}>{item?.name}</Heading.H34>
        <Subheading.SH18>{item?.description}</Subheading.SH18>
        {item?.link && (
          <Subheading.SH14
            className={workPageStyles.companyLink}
            onClick={() => window.open(item.link, '_blank')}
          >
            View company
          </Subheading.SH14>
        )}
        {item?.hashtags && (
          <companiesStyles.hashtags>
            {item.hashtags.map((tag) => (
              <companiesStyles.hashtag key={tag}>
                <Subheading.SH14 color={Colors.White}>{tag}</Subheading.SH14>
              </companiesStyles.hashtag>
            ))}
          </companiesStyles.hashtags>
        )}
        <workPageStyles.images>
          {item?.images.map((image) => (
            <img src={image} key={image} className={workPageStyles.image} />
          ))}
        </workPageStyles.images>
      </workPageStyles.container>
    </div>
  );
};

export default WorkPage;
