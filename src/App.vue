<template>
  <div class="main">
    <nevigation />
    
    <router-view v-bind:cities="cities" />
  </div>
</template>

<script>
import axios from "axios";
import db from "./firebase/firebaseint";
import Nevigation from "./components/Nevigation";
export default {
  name: "App",
  components: {
  Nevigation
  },
  data() {
    return {
      APIkey: "20b8b1357aace43644bc48cbb7b540c8",
      city:'',
      cities: [],
      };
    },
    created() {
    // this.getCurrentWeather(); 
    this.getCityWeatherfirebase();
    },
    methods: {
      getCityWeatherfirebase() {
        let firebaseDb = db.collection("cities");
        firebaseDb.onSnapshot((snap) => {
          snap.docChanges().forEach(async (doc) => {
            if(doc.type == "added") {
              try { 
                const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=+${doc.doc.data().city}+&units=imperial&appid=20b8b1357aace43644bc48cbb7b540c8`
          ); 
              const data = response.data;
              firebaseDb
                .doc(doc.doc.id)
                .update({
                  CurrentWeather: data,
                  })
              .then(() =>{
                this.cities.push(doc.doc.data());
              })
              // .then(() => {
              //   console.log(this.cities);
              // })
              } catch(err){
                console.log(err);
              }
            }
          });
        });
      }

      // getCurrentWeather() {
      //   axios.get(
      //     'https://api.openweathermap.org/data/2.5/weather?q='+this.city+'&units=imperial&appid=20b8b1357aace43644bc48cbb7b540c8'
      //     )
      // .then((res)=>{
      //   console.log(res.data);
      // })
      // }
    },
};
  

</script>

<style lang="scss">
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand" , sans-serif ;
}
.main{
  max-width: 1024px;
  margin: 0 auto;
  height: 100vh;
  .navigation {
    z-index: 99;
    position: fixed;
    max-width: 1024px;
    width: 100%;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06) ;
  }
}
</style>
