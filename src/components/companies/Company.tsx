import { List } from "immutable";
import React from "react";
import { Colors } from "../styles/colors";
import { Paragraph, Subheading } from "../styles/fonts";
import { companiesStyles } from "./companies.styles";

interface CompanyProps {
  name: string;
  description: string;
  logo: string;
  link: string;
  hashtags: List<string>;
}
const Company = ({ name, description, link, logo, hashtags }: CompanyProps) => {
  return (
    <div
      className={companiesStyles.companyCard}
      onClick={() => {
        window.open(link, "_blank");
      }}
    >
      <div>
        <Subheading.SH22 className={companiesStyles.title}>
          {name}
        </Subheading.SH22>
        <Paragraph.P14>{description}</Paragraph.P14>
      </div>
      <companiesStyles.hashtags>
        {hashtags.map((tag) => (
          <companiesStyles.hashtag>
            <Subheading.SH14 color={Colors.White}>{tag}</Subheading.SH14>
          </companiesStyles.hashtag>
        ))}
      </companiesStyles.hashtags>
    </div>
  );
};

export default Company;
