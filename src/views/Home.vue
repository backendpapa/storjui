<template>
  <div>
    <v-app-bar flat>
      <v-spacer></v-spacer>
      <v-btn @click="drawer=!drawer" class="mr-4" style="text-transform:none" text plain><v-icon>mdi-login</v-icon> Login</v-btn>
    </v-app-bar>
    <v-navigation-drawer
      
      temporary
      app
      right
      v-model="drawer"
      class="pa-4"
    >
      
    <div>
      <p class="text-h6 text-center">Login</p>
    </div>
    <p class="text-caption m3 "><v-icon size="12" class="mr-2" >mdi-information</v-icon> Access to your bucket requires your <i>Access key</i>,<i>Secret key</i>,<i>Endpoint</i> and <i>Region</i></p>

    <div style="margin-top:20px">
      <v-text-field dense outlined label="Secret Key" v-model="secret">

      </v-text-field>
      <v-text-field dense outlined label="Access Key" v-model="access">

      </v-text-field>
      <v-text-field dense outlined label="Endpoint" v-model="endpoint">

      </v-text-field>
      <v-text-field dense outlined  label="Region" v-model="region">

      </v-text-field>
      <v-btn block :loading="loading"  @click="login" color="black" dark>Login</v-btn>
    </div>
     
    </v-navigation-drawer>
  </div>
</template>

<script>

import axios from 'axios'
  export default {
    name: 'Home',

    components: {
      
    },
    data(){
      return {
        drawer:false,
        access:"",
        secret:"",
        endpoint:"",
        region:"",
        loading:false
      }
    },
    methods:{
      login(){
        this.loading=true
        axios.post('https://stor3end.herokuapp.com/',{
          access:this.access,
          endpoint:this.endpoint,
          secret:this.secret,
          region:this.region
        }).then(res=>{
          console.log(res)
          this.$store.commit("setCredentials",{
            access:this.access,
            endpoint:this.endpoint,
            secret:this.secret,
            region:this.region
          })
          this.$store.commit("setAuth",true)

          this.$store.commit("getBuckets")
          this.$router.push('/drive')
        }).catch(err=>{
          console.log(err)
          this.loading=false
        })
        
      }
    }
  }
</script>
