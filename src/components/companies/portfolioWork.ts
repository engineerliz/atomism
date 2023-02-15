import { List, Map } from "immutable";
import { PortfolioItemProps } from "./PortfolioItem";
import HoneyBunny from "../../assets/portfolio/HoneyBunny.png";
import HoneyBunny1 from "../../assets/portfolio/honey-bunny1.png";
import HoneyBunny2 from "../../assets/portfolio/honey-bunny2.png";
import HoneyBunny3 from "../../assets/portfolio/honey-bunny3.png";
import SnailMail from "../../assets/portfolio/snail-mail.png";
import WeatherBunny from "../../assets/portfolio/weather-bunny.png";
import Ary from "../../assets/portfolio/ary.png";
import DigitalSoda1 from "../../assets/portfolio/digital-soda1.png";
import DigitalSoda2 from "../../assets/portfolio/digital-soda2.png";
import DigitalSoda3 from "../../assets/portfolio/digital-soda3.png";
import DigitalSoda4 from "../../assets/portfolio/digital-soda4.png";
import DigitalSoda5 from "../../assets/portfolio/digital-soda5.png";
import GoldenHarvest1 from "../../assets/portfolio/golden-harvest1.png";
import GoldenHarvest2 from "../../assets/portfolio/golden-harvest2.png";
import GoldenHarvest3 from "../../assets/portfolio/golden-harvest3.png";
import Maker1 from "../../assets/portfolio/maker1.png";
import Maker2 from "../../assets/portfolio/maker2.png";
import MoneyMade1 from "../../assets/portfolio/money-made1.png";
import MoneyMade2 from "../../assets/portfolio/money-made2.png";
import MoneyMade3 from "../../assets/portfolio/money-made3.png";
import Dub1 from "../../assets/portfolio/dub1.png";
import Dub2 from "../../assets/portfolio/dub2.png";
import Dub3 from "../../assets/portfolio/dub3.png";
import Dub4 from "../../assets/portfolio/dub4.png";
import Dub5 from "../../assets/portfolio/dub5.png";
import Curio1_1 from "../../assets/portfolio/curio/Curio_Walkthrough1.1.png";
import Curio1_2 from "../../assets/portfolio/curio/Curio_Walkthrough1.2.png";
import Curio1_3 from "../../assets/portfolio/curio/Curio_Walkthrough1.3.png";
import Curio1_4 from "../../assets/portfolio/curio/Curio_Walkthrough1.4.png";
import Curio2_1 from "../../assets/portfolio/curio/Curio_Walkthrough2.1.png";
import Curio2_2 from "../../assets/portfolio/curio/Curio_Walkthrough2.2.png";
import Curio2_3 from "../../assets/portfolio/curio/Curio_Walkthrough2.3.png";
import Curio2_4 from "../../assets/portfolio/curio/Curio_Walkthrough2.4.png";
import Curio2_5 from "../../assets/portfolio/curio/Curio_Walkthrough2.5.png";
import gitmason from "../../assets/portfolio/Gitmason.png";
import dani from "../../assets/portfolio/Dani.png";
import smyl from "../../assets/portfolio/SMYL.png";
import versus1 from "../../assets/portfolio/versus/Versus1.png";
import versus2 from "../../assets/portfolio/versus/Versus2.png";
import versus3 from "../../assets/portfolio/versus/Versus3.png";
import versus4 from "../../assets/portfolio/versus/Versus4.png";
import versus5 from "../../assets/portfolio/versus/Versus5.png";
import origamii1 from "../../assets/portfolio/origamii/origamii_people.png";
import origamii2 from "../../assets/portfolio/origamii/origamii_products.png";
import origamii3 from "../../assets/portfolio/origamii/origamii_dataTable.png";
import origamii4 from "../../assets/portfolio/origamii/origamii_links.png";
import origamii5 from "../../assets/portfolio/origamii/origamii_terms.png";
import origamii6 from "../../assets/portfolio/origamii/origamii_codeCanvas.png";
import cypress1 from "../../assets/portfolio/cypress/cypress1.png";

export const Companies: Map<string, PortfolioItemProps> = Map({
  'dub': {
    id: 'dub',
    name: 'Dub',
    logo: '',
    description: 'Dub is a marketplace for user-created investment portfolios. Users can create or invest directly in portfolios on the app.',
    link: 'https://www.dubapp.com/',
    images: List([Dub2, Dub1, Dub3, Dub4, Dub5]),
    hashtags: List(['#engineering', '#design', '#product-management'])
  },
  'origamii': {
    id: 'origamii',
    name: 'Origamii',
    logo: '',
    description: 'Origamii is a productivity tool that helps team collaborate better through a standarized information storage and communication layer.',
    images: List([origamii1, origamii6, origamii2, origamii3, origamii4, origamii5]),
    hashtags: List(['#design', '#product-management'])
  },
  'curio': {
    id: 'curio',
    name: 'Curio',
    logo: '',
    description: 'Curio is an NFT trading and analytics platform that focuses on ease and speed of NFT trading.',
    link: 'https://www.curio.tools/',
    images: List([Curio1_1, Curio1_2, Curio1_3, Curio1_4, Curio2_1, Curio2_2, Curio2_3, Curio2_4, Curio2_5]),
    hashtags: List(['#design', '#product-strategy', '#ideation'])
  },
  'gitmason': {
    id: 'gitmason',
    name: 'GitMason',
    logo: '',
    description: 'GitMason is a platform for influencers to sell exclusive content and subscriptions.',
    images: List([gitmason]),
    hashtags: List(['#design', '#product-strategy'])
  },
  'versus': {
    id: 'versus',
    name: 'Versus Games',
    logo: '',
    description: 'Versus Games is a social way to play betting games with friends.',
    link: 'https://about.versusgame.com/',
    images: List([versus1, versus2, versus3, versus4, versus5]),
    hashtags: List(['#design', '#product-strategy', '#ideation'])
  },
  'moneymade': {
    id: 'moneymade',
    name: 'MoneyMade',
    logo: '',
    description: 'MoneyMade is an investment and market content site that provides daily market insights, ranked assets, and alternative asset recommendations.',
    link: 'https://moneymade.io/',
    images: List([MoneyMade1, MoneyMade2, MoneyMade3]),
    hashtags: List(['#design', '#user-onboarding'])
  },
  'dani': {
    id: 'dani',
    name: 'Dani',
    logo: '',
    description: 'Dani is a dental health app that helps users get access to dental insurance and educates on better dental health habits.',
    link: 'https://www.meetdani.com/',
    images: List([dani]),
    hashtags: List(['#engineering', '#design', '#product-strategy'])
  },
    'cypress': {
    id: 'cypress',
    name: 'Cypress',
    logo: '',
    description: 'Cypress is a treasury and funding management tool for startups to manage, invest, and spend their assets in an automated and risk adjusted way.',
    images: List([cypress1]),
    hashtags: List(['#design', '#product-strategy'])
  }

})

export const MiniDesigns: Map<string, PortfolioItemProps> = Map({
  'digital-soda': {
    id: 'digital-soda',
    name: 'Digital Soda',
    logo: '',
    description: 'Create, share, and monetize your digital portfolios.',
    images: List([DigitalSoda1, DigitalSoda2, DigitalSoda3, DigitalSoda4, DigitalSoda5]),
  },
  'smyl': {
    id: 'smyl',
    name: 'SMYL: Send Me Your Location',
    logo: '',
    description: 'SMYL is a social app where friends can post what they\'re doing from their current location.',
    images: List([smyl]),
  },
  'wine-shop': {
    id: 'wine-shop',
    name: 'Golden Harvest Wine Shop',
    logo: '',
    description: 'Example e-commerce design for a wine shop.',
    images: List([GoldenHarvest1, GoldenHarvest2, GoldenHarvest3]),
  },
  'honey-bunny': {
    id: 'honey-bunny',
    name: 'Honey Bunny Design Kit',
    logo: '',
    description: 'E-commerce mobile app design kit with an typography system, colors, and UI components.',
    images: List([HoneyBunny, HoneyBunny1, HoneyBunny2, HoneyBunny3]),
  },
    'maker': {
    id: 'maker',
    name: 'Maker',
    logo: '',
    description: 'Direct to consumer farm produce app to shop produce and learn about where your food comes from.',
    images: List([Maker1, Maker2]),
  },

  'lunch-break': {
    id: 'lunch-break',
    name: 'Lunch Break Designs',
    logo: '',
    description: 'Little designs made during lunch breaks.',
    images: List([Ary, SnailMail, WeatherBunny]),
  }
})

export const getItem = (id: string) => {
  if (Companies.get(id)) {
    return Companies.get(id)
  }
  if (MiniDesigns.get(id)) {
    return MiniDesigns.get(id)
  }
}