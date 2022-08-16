<script>
import { Line } from "vue-chartjs"
import db from './firebaseInit'

export default {
  name: 'allinonechart',
  data(){
    return{
      
      //temp_value: [],
      hum_value:[],
      // water_level_value:[],
      // soil_mois_value:[],
      time_value:[]
    }
  },
  watch:{
   time_value:function(val){
      console.log("val is:",val);
      this.gettingData();
   }
 },
  extends: Line,
  mounted(){
    db.collection('sensor_data').orderBy('time').limitToLast(10).get()
      .then(querySnapshot =>{
        querySnapshot.forEach(doc =>{
          //console.log(doc); check the connection is successful
          //console.log(doc.data()); //to log the data stream
          //console.log(doc.data().temp); to get the specific data field
          const data ={
            'id': doc.id,
            'temp': doc.data().temp,
            'hum': doc.data().hum,
            'water_level': doc.data().water_level,
            'soil_mois': doc.data().soil_mois,
            'time': doc.data().time
          }
           this.hum_value.push(data.hum)
           const timedateString = data.time.toDate().toLocaleTimeString('en-GB')+'-'+data.time.toDate().toLocaleDateString()
           this.time_value.push(timedateString)
          //this.loaded=true
          
          //temp_val.push(data.temp)
          //console.log(this.temp_val)
        })
        //this.temp_value = temp_val
        console.log(this.hum_value)
      });
  
   
  },
  methods:{
    gettingData(){
          this.renderChart(
      {
        labels: this.time_value,
        datasets: [
          {
            label: "Humidity (%)",
            data: this.hum_value,
            backgroundColor: "rgba(116, 188, 1, 0.20)",
            borderColor: "rgba(116, 188, 1, 0.50)",
            pointBackgroundColor: "rgba(116, 188, 1, 1)"
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: false,
          text: "Tempareture"
        }
      }
    );
    }
  }
  
};
//data: [2, 10, 5, 9, 0, 6, 20],[20, 23, 25, 26, 30, 32, 27]
</script>