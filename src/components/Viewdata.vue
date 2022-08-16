<template>
     <div id="viewdata">
         <h3>View Data</h3>
        <table>
            <th>Famer Name</th><th>Crop</th><th>Geo Area</th>
            <tr  v-for="famer in famers" v-bind:key="famer.id">
                <td> {{famer.famer_name}}</td><td>{{famer.crop}}</td><td>{{famer.geo_area}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name:'viewdata',
    data(){
        return{
            famers: []
        }
    },
    created(){
        db.collection('famer_data').get().then(
            querySnapshot => {
                querySnapshot.forEach(doc =>{
                    //console.log(doc.data());
                    const data = {
                        'id':doc.id,
                        'famer_name':doc.data().famer_name,
                        'crop':doc.data().crop,
                        'geo_area':doc.data().geo_area
                    }
                    this.famers.push(data)
                })
            }
        )
    }
}

</script>

