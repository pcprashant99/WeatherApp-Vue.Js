<template>
  <div class="grid">
    <div class="city-link" v-for="(city,index) in cities" v-bind:key="index" >
      <city v-bind:city="city" />
    </div>
  </div>
</template>

<script>
import City from "../components/City"


export default {
  name: 'Home',
  props: ['cities'],
  components: {
    City,
  },
  // created (){
  //   console.log(this.cities);
  // },
}
</script>
<style lang="scss" scoped>
.grid {
  display : grid;
  padding-top: 81px;
  background-color: #31363d;
  width: 100%;
  min-height: 100vh;
  @media (min-width: 400px) {
    grid-template-columns: repeat(2,1fr);
  }
}
</style>