/* HOW TO USE THIS FUNCTION:

1. Import the function in your component:
<script setup>
import { getImage } from ''../utility/getImage';  // <-- import the function
...
</script>

2. Use the function in your template:
<img :src="getImage(activity)" alt="Activity Image">
*/

// composables/getImage.js
export const getImage = (activity) => {
  if (activity?.imgURL) {
    return `https://res.cloudinary.com/dpba22oef/image/upload/w_1000,ar_3:2,c_fill,g_auto/${activity.imgURL}`;
  }

  switch (activity?.type) {
    case 'Yoga':
      return '/img/defaultYoga.png';
    case 'Meditation':
      return '/img/defaultMeditation.png';
    case 'Seminar':
      return '/img/defaultSeminar.png';
    default:
      return '/img/defaultError.png';
  }
};
