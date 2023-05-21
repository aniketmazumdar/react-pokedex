import { FilterStatRanges } from ".";
import * as DoubleRangeSliderStories from "../../atoms/DoubleRangeSlider/index.stories";

export default {
  title: "COMPONENTS/MODULES/FilterStatRanges",
  component: FilterStatRanges,
};


export const Default = {
  args: {
    dataList: {
      "hp": { ...DoubleRangeSliderStories.Default.args, min: 0, max: 210 },
      "attack": { ...DoubleRangeSliderStories.Default.args, min: 0, max: 210 },
      "defense": { ...DoubleRangeSliderStories.Default.args, min: 0, max: 210 },
      "special-attack": { ...DoubleRangeSliderStories.Default.args, min: 0, max: 210 },
      "special-defense": { ...DoubleRangeSliderStories.Default.args, min: 0, max: 210 },
      "speed": { ...DoubleRangeSliderStories.Default.args, min: 0, max: 210 },
    },
    minLevel: 0,
    maxLevel: 210,
    closeModalEvent: () => { },
    onSubmitEvent: () => { },
    onChangeStat: () => { }
  },
};

export const Selected = {
  args: {
    ...Default.args,
    dataList: {
      "hp": { ...Default.args.dataList['hp'], min: 10, max: 80 },
      "attack": { ...Default.args.dataList['attack'], min: 20, max: 110 },
      "defense": { ...Default.args.dataList['defense'], min: 30, max: 70 },
      "special-attack": { ...Default.args.dataList['special-attack'], min: 70, max: 200 },
      "special-defense": { ...Default.args.dataList['special-defense'], min: 100, max: 190 },
      "speed": { ...Default.args.dataList['speed'], min: 50, max: 10 },
    },
  },
};