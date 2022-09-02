import { List } from "immutable"

const BackgroundColors = {
  purple: '#A57BFF',
  mint: '#85FFC4',
  yellow: '#FFF171',
  orange: '#FF9877',
  pink: '#FF888F',
  green: '#B8FF97',
  blue: '#2FB4FF',
  coral: '#FF7979',
  bluePurple: '#8C79FF',
}

const ColorOptions = List([
  BackgroundColors.purple,
  BackgroundColors.mint,
  BackgroundColors.yellow,
  BackgroundColors.orange,
  BackgroundColors.pink,
  BackgroundColors.green,
  BackgroundColors.blue,
  BackgroundColors.coral,
  BackgroundColors.bluePurple,
]);

const generateRandom = () => {

  const min = 0;
  const max = 8;
    // find diff
    const difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

export const getBackgroundColor = () => ColorOptions.get(generateRandom())