<template>
  <v-app>
       <v-navigation-drawer
       v-if="$route.path!=='/'"
      app
      permanent
      class="pa-3"
      width="200"
    >
      

        <v-img width="50" style="position:absolute;top:30px;left:35%;right:10%" src="./assets/logs.svg"></v-img>
   

   <v-container>
     <v-list  style="margin-top:40px;margin-left:-19px" dense>
        <v-list-item
        link
        >
          <v-list-item-icon>
            <v-icon color="#848DD3" size="20">mdi-tape-drive</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title style="color:#848DD3" class="font-weight-bold text-caption">My drive</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div class="mt-2 mb-n2">
        <p class="font-weight-bold grey--text text-caption">FILES</p>
      </div>

      <v-list style="margin-left:-19px" dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          
        >
          <v-list-item-icon>
            <v-icon color="#848DD3" size="20" >{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="color2 text-caption font-weight-bold">{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>


    <div class="mt-2 mb-n2">
        <p class="font-weight-bold grey--text text-caption">FOLDERS</p>
      </div>

      <v-list style="margin-left:-19px" dense>
        <v-list-item
          v-for="item in items3"
          :key="item.title"
          link
          
        >
          <v-list-item-icon>
            <v-icon color="#848DD3" size="20" >{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="color2 text-caption font-weight-bold">{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div style="position:absolute;bottom:10px">
        <v-row  no-gutters>
          <v-menu
      top
      
    >
      <template v-slot:activator="{ on, attrs }">
         <v-btn text  v-bind="attrs"
          v-on="on" icon>
            <v-avatar size="30" rounded>
            <img src="https://img.icons8.com/ultraviolet/50/000000/avatar.png"/>
          </v-avatar>
         </v-btn>
        
      </template>

      <v-list>
        <v-list-item
          @click="logout"
        >
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-caption">Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
        
          <div>
            <p class="text-caption font-weight-bold">2fh34h3i5959...</p>
            <p class="text-caption grey--text mt-n5">EU1</p>
          </div>
        </v-row>
      </div>
   </v-container>
     
    </v-navigation-drawer>




    <v-main >
      <router-view v-if="$store.state.auth==true && $route.path=='/'?$router.push('/drive'):'cool'"/>
    </v-main>




     <v-navigation-drawer
      app
      permanent
      right
      v-if="$route.path!=='/'"
      
    >
      

     
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import "./App.css"
export default {
  name: 'App',

  data: () => ({
    items:[
      {name:'My files',icon:'mdi-file-multiple'},
      {name:'Sharing',icon:'mdi-share'},
      {name:'File requests',icon:'mdi-monitor-share'},
      {name:'Deleted files',icon:'mdi-delete'}
    ],
    items3:[
      {name:'Design',icon:'mdi-folder'},
      {name:'Music',icon:'mdi-folder'},
      {name:'Design Sprint',icon:'mdi-folder'},
      
    ],
    items2:[
      {name:""}
    ]
  }),
  methods:{
    logout(){
      sessionStorage.clear()
      this.$store.commit("setAuth",false)
      this.$store.commit("setCredentials",{
            access:"",
            endpoint:"",
            secret:"",
            region:""
      })
      this.$router.push('/')
      
    }
  }
};
</script>
<style >

.v-navigation-drawer__border {
  width: 0px!important;
  background-color: red!important;
}
::-webkit-scrollbar {
  display: none;
}
</style>
