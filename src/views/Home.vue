<template>
  <div class="home">
    
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
  name: 'Home',
  setup() {
    const name = ref('Daniel');
    let age = '300';

    const handleClick = () => {
      console.log('You clicked me');
    }

    return { name, age, handleClick}
  }
}
</script>
