<template>
  <div id="dashboard">
    <h2>Dashboard</h2>
    <div class="row">
      <div class="col s6">
        <h5>Tempareture</h5>
        <TemparetureChart />
      </div>
      <div class="col s6">
        <h5>Humidity</h5>
        <Humidity />
      </div>
    </div> 
    <div class="row">
      <div class="col s6">
        <h5>Soil Moisture</h5>
        <Soilmoisture />
      </div>
      <div class="col s6">
        <h5>Water level</h5>
        <Waterlevel />
      </div>
    </div>
  </div>
</template>

<script>
import TemparetureChart from './TemparetureChart.vue'
import Humidity from './HumidityChart.vue'
import Soilmoisture from './SoilmoistureChart.vue'
import Waterlevel from './WaterlevelChart.vue'

export default {
  name: "dashboard",
  components: {
    TemparetureChart,
    Humidity,
    Soilmoisture,
    Waterlevel
  },
  data() {
    return {
     
    };
  },
 
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
