import { CardBox } from ".";

export default {
  title: "COMPONENTS/MODULES/CardBox",
  component: CardBox,
};


export const Default = {
  args: {
    compData: {
      formattedId: "005",
      id: 5,
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
      name: "charmeleon",
      types: ['Fire']
    }, 
    withCaption: true,
    size: 'md',
    handleClickEvent: () => {}
  },
};
