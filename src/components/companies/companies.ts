import { List } from "immutable";

export const Companies = List([
  {
    name: 'MoneyMade',
    logo: '',
    description: 'MoneyMade is an investment and market content site that provides daily market insights, ranked assets, and alternative asset recommendations.',
    link: 'https://moneymade.io/',
    hashtags: List(['#design', '#user-onboarding'])
  },
  {
    name: 'Dub',
    logo: '',
    description: 'Dub is a marketplace for user-created investment portfolios. Users can create or invest directly in portfolios on the app.',
    link: 'https://www.dubapp.com/',
    hashtags: List(['#engineering', '#design', '#product-management'])
  },
  {
    name: 'Emerge Tools',
    logo: '',
    description: 'Emerge Tools is a mobile app performance tooling platform that helps teams build faster, smaller mobile apps.',
    link: 'https://www.emergetools.com/',
    hashtags: List(['#engineering', '#design'])
  }
])