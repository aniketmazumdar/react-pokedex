
import { PokedexDetailsCharacteristics } from ".";
import Badge from '../../atoms/Badge/index.stories';
import Placeholder from '../../atoms/Placeholder/index.stories';

export default {
  title: "COMPONENTS/MODULES/PokedexDetailsCharacteristics",
  component: PokedexDetailsCharacteristics,
  argTypes: {
    ...Badge.argTypes,
    ...Placeholder.argTypes,
  },
};


export const Default = {
  args: {
    compData: {
      "height": "11\"",
      "weight": "86.2 Kg",
      "gender": [
          "Female",
          "Male"
      ],
      "eggGroups": "Monster, Dragon",
      "abilities": "Blaze, Solar Power",
      "types": [
          "Fire"
      ],
      "weakAgainsts": [
          "Water",
          "Grass",
          "Ice"
      ]
    },
    isLoading: false
  },
};