
import { PokedexDetailsButtonGroup } from ".";
import Placeholder from "../../atoms/Placeholder/index.stories";

export default {
  title: "COMPONENTS/MODULES/PokedexDetailsButtonGroup",
  component: PokedexDetailsButtonGroup,
  args:[
    ...Placeholder.args
  ]
};


export const Default = {
  args: {
    compData: {
      prevPokemonName: "charmander",
      nextPokemonName: "charizard",
    },
    isLoading: false,
    changePokemonEvent: ()=>{}
  },
};