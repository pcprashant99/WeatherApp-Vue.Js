<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";
import db from "./firebase/firebaseint";
export default {
  name: "App",
  data() {
    return {
      APIkey: "20b8b1357aace43644bc48cbb7b540c8",
      city: "pune",
      citys: [],
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
          snap.docChanges().forEach(async(doc) => {
            if(doc.type=="added") {
              try { 
                const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?q='+doc.doc.data().city+'&units=imperial&appid=20b8b1357aace43644bc48cbb7b540c8'
          ); 
              const data = response.data;
              firebaseDb
              .doc(doc.doc.id)
              .update({CurrentWeather:data,})
              .this(() =>{
                this.citys.push(doc.doc.data());
              })
              .this(() => {
                console.log(this.citys);
              });
              } catch(err){
                console.log(err);
              }
            }
          });
        });
      },

      getCurrentWeather() {
        axios.get(
          'https://api.openweathermap.org/data/2.5/weather?q='+this.city+'&units=imperial&appid=20b8b1357aace43644bc48cbb7b540c8'
          )
      .then((res)=>{
        console.log(res.data);
      })
      }
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
</style>
