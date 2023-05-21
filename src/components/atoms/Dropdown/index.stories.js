import { Dropdown } from ".";

export default {
  title: "COMPONENTS/ATOMS/Dropdown",
  component: Dropdown,
};

export const Default = {
  args: {
    name: 'gender', 
    id: 'gender',
    classes: 'abc, xyz', 
    label: 'Gender', 
    dataList:['female', 'male', 'genderless'], 
    callback: () => {}, 
    selected: []
  },
};

export const Checked = {
  args: {
    name: 'type', 
    id: 'type',
    classes: 'abc, xyz', 
    label: 'Type', 
    dataList: ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow'], 
    callback: () => {}, 
    selected: ['Fighting', 'Flying', 'Poison']
  },
};
