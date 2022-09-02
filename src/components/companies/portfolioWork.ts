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

export const Companies: Map<string, PortfolioItemProps> = Map({
  'dub': {
    id: 'dub',
    name: 'Dub',
    logo: '',
    description: 'Dub is a marketplace for user-created investment portfolios. Users can create or invest directly in portfolios on the app.',
    link: 'https://www.dubapp.com/',
    images: List([Dub1, Dub2, Dub3, Dub4, Dub5]),
    hashtags: List(['#engineering', '#design', '#product-management'])
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
  'emmerge-tools': {
    id: 'emmerge-tools',
    name: 'Emerge Tools',
    logo: '',
    description: 'Emerge Tools is a mobile app performance tooling platform that helps teams build faster, smaller mobile apps.',
    link: 'https://www.emergetools.com/',
    images: List([]),
    hashtags: List(['#engineering', '#design'])
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