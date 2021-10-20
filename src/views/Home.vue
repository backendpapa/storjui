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
      <v-btn outlined color="white" rounded dark @click="drawer=!drawer" class="mr-4 text-caption  d-none d-sm-flex" style="text-transform:none" large plain> Access Bucket <v-icon>mdi-chevron-right</v-icon></v-btn>
      <v-app-bar-nav-icon class="white--text mt-n4  d-flex d-sm-none" ></v-app-bar-nav-icon>
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
      <v-btn block :loading="loading" style="text-transform:none"  @click="login" color="black" dark>Access Bucket <v-icon>mdi-chevron-right</v-icon></v-btn>
    </div>
     
    </v-navigation-drawer>


    <!-- Home page body -->
<div style="height:140vh;position:relative">
  <div style="height:140vh;background-color:#4075F5;width:100%" class="img">
    <div style="height:100%;width:50%;background-color:#3C6FE5"></div>
  </div>
 
    <v-container>
      <v-row align="center" class="animate__animated animate__fadeIn animate__slower" justify="center" no-gutters style="position:absolute;top:10%;height:80vh">
      <v-col cols="12" xl="7" lg="7">
        <div style="height:100%;width:100%" class="animate__animated animate__fadeInDown">
        <p class="text-h1 font-weight-bold white--text  ">S3 Bucket Closer Than Ever</p>
        
        <v-btn rounded @click="drawer=!drawer" color="white" style="text-transform:none" class="text-body-2 blue--text animate__animated animate__fadeIn animate__slow animate__delay-1s" x-large>Access S3 Bucket <v-icon class="ml-4">mdi-chevron-right</v-icon></v-btn>
      </div> 
      </v-col>
      <v-col cols="12" xl="5" lg="5"></v-col>
</v-row>
      
    </v-container>
    <v-container >
      <v-row no-gutters style="position:absolute;bottom:-15%;width:90%">
    
  <carousel  :nav="false" :autoPlay="true"   autoWidth  items="6" style="height:50vh;width:100%">

       <div style="width:200px" v-for="i in items" :key="i">
         <p class="text-body-2 font-weight-bold white--text">{{i.id}}</p>
          <p style="font-size:18px" class=" white--text ">{{i.title}}</p>   
          
       </div>
</carousel>


       
      </v-row>

      <div>
        <p class="text-h3 text-center font-weight-bold white--text">Advantages</p>

      </div>

      <!-- Advantages Desktop -->
      <v-row class="d-none d-sm-flex" no-gutters>
        <v-col cols="2" />
        <v-col cols="8">
          <v-row no-gutters align="center" justify="center">
            <v-col cols="4" class="mr-n1">
              <v-card style="height:50vh;border:1px #96E4F0 solid"  color="#3B6DDE" hover>
                <v-row style="height:100%" no-gutters align="center" justify="center">
                  <v-spacer></v-spacer>
                  <div class="" style="margin:20px">
                        <p class="text-center"><v-icon size="140" color="white" style="opacity:0.1">mdi-circle-outline</v-icon></p>
                        <p class="text-h5 font-weight-bold white--text  text-center ">Instant  S3 Access</p>
                        <p class="text-center text-caption " style="color:#96E4F0">Access files and folders in minutes just with your S3 credentials.</p>
                  </div>
                  <v-spacer></v-spacer>
                </v-row>
              </v-card>
            </v-col>
            <v-col cols="4" style="position:relative;z-index:2">
              <v-card style="height:60vh" color="#4987FF" hover>

                  <v-row style="height:100%" no-gutters align="center" justify="center">
                  <v-spacer></v-spacer>
                  <div class="" style="margin:20px">
                        <p class="text-center"><v-icon size="140" color="white" style="opacity:0.1">mdi-circle-outline</v-icon></p>
                        <p class="text-h5 font-weight-bold white--text  text-center ">Privacy</p>
                        <p class="text-center text-caption " style="color:#96E4F0">Your S3 credentials are only known by you and are not stored or saved on any database.</p>
                        <p class="text-center"><v-btn class="text-caption" large color="white" style="text-transform:none" rounded>Learn more <v-icon >mdi-chevron-right</v-icon></v-btn></p>
                  </div>
                  <v-spacer></v-spacer>
                </v-row>

                <div class="white" style="height:5px;width:100%;position:absolute;bottom:0">

                </div>
              </v-card>
            </v-col>
            <v-col cols="4" class="ml-n1">
              <v-card style="height:50vh;border:1px #96E4F0 solid" color="#3B6DDE" hover>
                <v-row style="height:100%" no-gutters align="center" justify="center">
                  <v-spacer></v-spacer>
                  <div class="" style="margin:20px">
                        <p class="text-center"><v-icon size="140" color="white" style="opacity:0.1">mdi-circle-outline</v-icon></p>
                        <p class="text-h5 font-weight-bold white--text  text-center ">Interactive</p>
                        <p class="text-center text-caption " style="color:#96E4F0">Open,Edit and Read documents(PDF,CSV...), play your media files right on the platform without having to download the files.</p>
                  </div>
                  <v-spacer></v-spacer>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2" />
      </v-row>

      <!-- Advantages mobile -->
      <v-row no-gutters class="ma-2  d-flex d-sm-none">
        <v-col cols="12">
            <v-card style="height:50vh;border:1px #96E4F0 solid" class="mb-2"  color="#3B6DDE" hover>
                <v-row style="height:100%" no-gutters align="center" justify="center">
                  <v-spacer></v-spacer>
                  <div class="" style="margin:20px">
                        <p class="text-center"><v-icon size="140" color="white" style="opacity:0.1">mdi-circle-outline</v-icon></p>
                        <p class="text-h5 font-weight-bold white--text  text-center ">Instant  S3 Access</p>
                        <p class="text-center text-caption " style="color:#96E4F0">Access files and folders in minutes just with your S3 credentials.</p>
                  </div>
                  <v-spacer></v-spacer>
                </v-row>
              </v-card>
        </v-col>
        <v-col cols="12">
          <v-card style="height:60vh" color="#4987FF" class="mb-2" hover>

                  <v-row style="height:100%" no-gutters align="center" justify="center">
                  <v-spacer></v-spacer>
                  <div class="" style="margin:20px">
                        <p class="text-center"><v-icon size="140" color="white" style="opacity:0.1">mdi-circle-outline</v-icon></p>
                        <p class="text-h5 font-weight-bold white--text  text-center ">Privacy</p>
                        <p class="text-center text-caption " style="color:#96E4F0">Your S3 credentials are only known by you and are not stored or saved on any database.</p>
                        <p class="text-center"><v-btn class="text-caption" large color="white" style="text-transform:none" rounded>Learn more <v-icon >mdi-chevron-right</v-icon></v-btn></p>
                  </div>
                  <v-spacer></v-spacer>
                </v-row>

                <div class="white" style="height:5px;width:100%;position:absolute;bottom:0">

                </div>
              </v-card>
        </v-col>
        <v-col cols="12">
          <v-card style="height:50vh;border:1px #96E4F0 solid" color="#3B6DDE" hover>
                <v-row style="height:100%" no-gutters align="center" justify="center">
                  <v-spacer></v-spacer>
                  <div class="" style="margin:20px">
                        <p class="text-center"><v-icon size="140" color="white" style="opacity:0.1">mdi-circle-outline</v-icon></p>
                        <p class="text-h5 font-weight-bold white--text  text-center ">Interactive</p>
                        <p class="text-center text-caption " style="color:#96E4F0">Open,Edit and Read documents(PDF,CSV...), play your media files right on the platform without having to download the files.</p>
                  </div>
                  <v-spacer></v-spacer>
                </v-row>
              </v-card>
        </v-col>

      </v-row>
    </v-container>
    

</div>

<!-- aim -->



  </div>
</template>

<script>

import axios from 'axios'
import carousel from 'vue-owl-carousel'
  export default {
    name: 'Home',

    components: {
      carousel
    },
    data(){
      return {
        drawer:false,
        access:"",
        secret:"",
        endpoint:"",
        region:"",
        loading:false,
        items:[
          {id:"01",title:"Introducing"},
          {id:"02",title:"S3"},
          {id:"03",title:"Quick"},
          {id:"04",title:"Bucket"},
          {id:"05",title:"Storage"},
          {id:"06",title:"Access"}
        ]
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