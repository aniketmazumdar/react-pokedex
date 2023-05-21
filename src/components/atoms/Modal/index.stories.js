import { Modal } from ".";

export default {
  title: "COMPONENTS/ATOMS/Modal",
  component: Modal,
};

const dummyComponent = <>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus cursus diam, a laoreet odio eleifend quis. Etiam sem mauris, 
facilisis vehicula egestas ac, scelerisque eu sapien. Cras eget nibh porta, tempor turpis in, rutrum massa. Donec nec malesuada lectus. 
Morbi laoreet augue id rutrum dictum. Aenean lacinia luctus convallis. Duis consectetur, sapien sed suscipit pretium, lacus nisi maximus lorem, 
vel scelerisque quam dui ut dui. Phasellus quis luctus odio. Aliquam non tortor hendrerit, rhoncus est non, convallis arcu. Aliquam varius 
tincidunt dolor. Integer fermentum erat eget condimentum vulputate. In sed lorem mauris. Quisque gravida nisl a ex vehicula pharetra. 
Proin vehicula mi posuere ante aliquet aliquet. Pellentesque a ultricies felis, rutrum molestie quam. Maecenas fringilla, eros a rutrum luctus, 
neque nulla blandit sem, aliquet congue velit tortor in quam. In ac venenatis tortor. Vestibulum id blandit magna. Nulla facilisi. Cras vel tempus odio, 
a iaculis felis. Quisque eu tincidunt eros, ut tristique libero. Ut placerat tortor a magna pretium, vel imperdiet nisi rutrum. Suspendisse sed luctus 
eros, eget condimentum mauris. Ut ac quam vitae lorem accumsan lobortis ut et tortor. Etiam porttitor, purus ut placerat aliquam, diam sem aliquam mi, 
vel dictum sapien tortor id sapien.</>

export const Large = {
  args: {
    childComp: dummyComponent, 
    size:'lg', 
    isOpen:true, 
    classes:'xyz'
  },
};

export const Middle = {
  args: {
    childComp: dummyComponent, 
    size:'md', 
    isOpen:true, 
    classes:'xyz'
  },
};

export const Small = {
  args: {
    childComp: dummyComponent, 
    size:'sm', 
    isOpen:true, 
    classes:'xyz'
  },
};