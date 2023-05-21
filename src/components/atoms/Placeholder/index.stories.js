import { Placeholder } from ".";

export default {
  title: "COMPONENTS/ATOMS/Placeholder",
  component: Placeholder,
};


export const Single = {
  args: {
    variant: 'rounded',
    width: '10em', 
    height: '10em', 
    quantity: 1
  },
};

export const Multiple = {
  args: {
    variant: 'rounded',
    width: '10em', 
    height: '10em', 
    quantity: 2
  },
};