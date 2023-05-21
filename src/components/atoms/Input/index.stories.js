import { Input } from ".";

export default {
  title: "COMPONENTS/ATOMS/Input",
  component: Input,
};

export const Default = {
  args: {
    name: 'search', 
    id: 'search',
    classes: 'abc, xyz', 
    label: 'Search By', 
    placeholder: 'Search By', 
    onChangeHandler: () => {}, 
    isSearch: true,
    readOnly: false
  },
};

