<template>
  <div>
    <v-app-bar fixed color="transparent" flat class="animate__animated animate__fadeIn">
      <v-container class="mt-3">
        <v-row no-gutters align="center" justify="center">
          <p class="animate__animated animate__fadeInLeft"><v-img width="100" src="../assets/logi2.svg"></v-img></p>
      <v-spacer></v-spacer>
      <v-btn text class="text-caption font-weight-bold d-none d-sm-flex " to="/about" color="white" plain><span class="mr-2">&#183;</span> ABOUT</v-btn>

      <v-btn text class="text-caption font-weight-bold d-none d-sm-flex" to="/supported-s3" color="white" plain><span class="mr-2">&#183;</span>SUPPORTED S3</v-btn>

      <v-btn text class="text-caption font-weight-bold d-none d-sm-flex " to="/learn" color="white" plain><span class="mr-2">&#183;</span>TUTORIALS</v-btn>
      
      <v-spacer></v-spacer>
      <v-btn outlined color="white" rounded dark @click="drawer=!drawer" class="mr-4  d-none d-sm-flex" style="text-transform:none" plain> Login</v-btn>
      <v-app-bar-nav-icon class="white--text mt-n4" ></v-app-bar-nav-icon>
        </v-row>
      </v-container>
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


    <!-- Home page body -->
<div style="height:100vh;position:relative">
  <div style="height:100vh;background-color:#4075F5;width:100%" class="img">
    <div style="height:100%;width:50%;background-color:#3C6FE5"></div>
  </div>
 
    <v-container>
      <v-row align="center" class="animate__animated animate__fadeIn animate__slower" justify="center" no-gutters style="position:absolute;top:10%;height:80vh">
      <v-col cols="12" xl="7" lg="7">
        <div style="height:100%;width:100%" class="animate__animated animate__fadeInDown">
        <p class="text-h1 font-weight-bold white--text  ">S3 Bucket Closer Than Ever</p>
        
        <v-btn rounded @click="drawer=!drawer" color="white" style="text-transform:none" class="text-body-2 blue--text animate__animated animate__fadeIn animate__slow animate__delay-1s" x-large>Access S3 bucket <v-icon class="ml-4">mdi-chevron-right</v-icon></v-btn>
      </div> 
      </v-col>
      <v-col cols="12" xl="5" lg="5"></v-col>
</v-row>
    </v-container>

</div>

<!-- aim -->
<v-row no-gutters>

</v-row>


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
<style>

</style>