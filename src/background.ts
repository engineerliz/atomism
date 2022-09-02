import { List } from "immutable"

const BackgroundColors = {
  purple: '#A57BFF',
  mint: '#85FFC4',
  yellow: '#FFF171',
  orange: '#FF9877',
  pink: '#FF888F',
}

const ColorOptions = List([
  BackgroundColors.purple,
  BackgroundColors.mint,
  BackgroundColors.yellow,
  BackgroundColors.orange,
  BackgroundColors.pink,
]);

const generateRandom = () => {

  const min = 0;
  const max = 4
    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

export const getBackgroundColor = () => ColorOptions.get(generateRandom())