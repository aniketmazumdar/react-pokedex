import { DoubleRangeSlider } from ".";

export default {
  title: "COMPONENTS/ATOMS/DoubleRangeSlider",
  component: DoubleRangeSlider,
};

export const Default = {
  args: {
    minLevel: 0,
    maxLevel: 210,
    name: 'hp',
    values: [],
    onAfterChangeHandler: () => { }
  }
}

export const Selected = {
  args: {
    minLevel: 0,
    maxLevel: 210,
    name: 'hp',
    values: [20, 80],
    onAfterChangeHandler: () => { }
  }
}