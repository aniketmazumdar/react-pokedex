
import { PokedexDetails } from ".";
import PokedexDetailsBasicInfo from "../PokedexDetailsBasicInfo/index.stories";
import PokedexDetailsCharacteristics from "../PokedexDetailsCharacteristics/index.stories";
import PokedexDetailsStrategies from "../PokedexDetailsStrategies/index.stories";
import PokedexDetailsEvolutionChain from "../PokedexDetailsEvolutionChain/index.stories";
import PokedexDetailsButtonGroup from "../PokedexDetailsButtonGroup/index.stories";

import PokedexDecorator from "../../../../.storybook/decorators/PokedexDecorator";

// const Template = (props) => <PokedexDetails {...props} />
// export const Default = Template.bind({});

export default {
  title: "COMPONENTS/MODULES/PokedexDetails",
  component: PokedexDetails,
  decorators: [PokedexDecorator],
  args:[
    ...PokedexDetailsBasicInfo.args,
    ...PokedexDetailsCharacteristics.args,
    ...PokedexDetailsStrategies.args,
    ...PokedexDetailsEvolutionChain.args,
    ...PokedexDetailsButtonGroup.args,
  ]
};


export const Default = {
  args: {
    pokemonId: 5,
    closeModalEvent: () => { },
    changePokemonEvent: () => { },
  },
};