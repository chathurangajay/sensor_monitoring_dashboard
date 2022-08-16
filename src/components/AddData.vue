<template>
    <div id="add-data">
        <h3>Add Data</h3>
        <div class="row">
            <form @submit.prevent="saveEmployee" class="col s12">
                <!-- <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="employee_id" required>
                        <label>Employee ID#</label>
                    </div>
                </div> -->

                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="famername" required>
                        <label>Famer Name</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="crop" required>
                        <label>Crop</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="geoarea" required>
                        <label>Geo Area</label>
                    </div>
                </div>
                <button type="submit" class="btn">Submit</button>
                <router-link to='/' class="btn grey">Cancel</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name:'add-data',
    data(){
        return{
            famername:null,
            crop:null,
            geoarea:null
        }
    },
    methods:{
        saveEmployee(){
            db.collection('famer_data').add({
                famer_name:this.famername,
                crop:this.crop,
                geo_area:this.geoarea
            })
            .then(this.$router.push('/view-data'))
            .catch(error=>console.log(error))
        }
    }
}
</script>

<style scoped>

</style>