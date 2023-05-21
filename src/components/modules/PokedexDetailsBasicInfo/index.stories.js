
import { PokedexDetailsBasicInfo } from ".";
import CardBox from "../CardBox/index.stories";
import Modal from "../../atoms/Modal/index.stories";
import PokedexDetailsDescription from "../PokedexDetailsDescription/index.stories";
import Placeholder from "../../atoms/Placeholder/index.stories";

export default {
  title: "COMPONENTS/MODULES/PokedexDetailsBasicInfo",
  component: PokedexDetailsBasicInfo,
  args: {
    ...CardBox.args,
    ...Modal.args,
    ...PokedexDetailsDescription.args,
    ...Placeholder.args,
  },
};


export const Default = {
  args: {
    compData: {
      "id": 5,
      "formattedId": "005",
      "name": "charmeleon",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
      "types": [
          "Fire"
      ],
      "pokemonDesc": "When it swings its burning tail, it elevates the temperature to unbearably high levels." 
  }, 
    closeModalEvent: ()=>{}, 
    changePokemonEvent: ()=>{}, 
    isLoading: false
  },
};