import { FilterDropdownsMobile } from ".";
import Dropdown from '../../atoms/Dropdown/index.stories';
import Input from '../../atoms/Input/index.stories';
import FilterStatRanges from '../FilterStatRanges/index.stories';

export default {
  title: "COMPONENTS/MODULES/FilterDropdownsMobile",
  component: FilterDropdownsMobile,
  args: [
    ...Dropdown.args,
    ...Input.args,
    ...FilterStatRanges.args,
  ]
};


export const Default = {
  args: {
    types: ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric'],
    checkedTypes: [],
    genders: ['female', 'male', 'genderless'],
    checkedGenders: [],
    stats: {
      "hp": {
          "min": 0,
          "max": 210
      },
      "attack": {
          "min": 0,
          "max": 210
      },
      "defense": {
          "min": 0,
          "max": 210
      },
      "special-attack": {
          "min": 0,
          "max": 210
      },
      "special-defense": {
          "min": 0,
          "max": 210
      },
      "speed": {
          "min": 0,
          "max": 210
      }
  },
    minStatLevel: 0,
    maxStatLevel: 210,
    showStatDiv: false,
    setShowStatDiv: () => { },
    submitFilterValues: () => { },
    closeModalEvent: () => { },
  },
};
