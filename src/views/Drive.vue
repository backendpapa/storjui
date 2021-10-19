<template>
  <div class="pa-3">
      <v-row no-gutters>
        <v-select
          :items="$store.state.Buckets"
          label="Select Bucket"
          v-model="bucket"
          item-text="Name"
          @input="hello"
          dense
          style="width:20px"
          
          
          solo
          flat
        ></v-select>
        <v-dialog
      v-model="$store.state.dialog"
      width="300"
      
      
    >
      <template v-slot:activator="{ on, attrs }">
        
        <v-btn plain  v-bind="attrs"
          v-on="on" @click="!$store.state.dialog" class="ml-2" text icon><v-icon>mdi-folder-multiple-plus</v-icon></v-btn>
      </template>

      <v-card style="background-color:#DFDDF3" pa-2>
        

        <v-card-text>
          <div style="height:30vh" v-if="$store.state.status==true">
            <v-row no-gutters class="pt-2">
             <v-spacer></v-spacer>
              <p class="text-center"><v-img width="150" src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/120/000000/external-tick-user-interface-flatart-icons-flat-flatarticons.png"/></p>
              <v-spacer></v-spacer>
         </v-row>
         <p class="text-center">New Bucket created</p>
          </div>
          <div v-else style="height:30vh">
            <v-row no-gutters align="center" justify="new" style="height:30vh">
              <v-spacer></v-spacer>
             <div class="pt-2">
                <p class="text-center"><v-icon size="60">mdi-folder-multiple-plus</v-icon></p>
                <p style="font-weight:12px" >Your new Bucket name</p>
                 <v-text-field  v-model="bucketname"  class="mt-n3"  placeholder="Bucket name"  dense solo flat></v-text-field>
                 <v-btn @click="newBucket" :disabled="bucketname==''" class="mt-n3 white--text" color="black" block style="text-transform:none"  >Create</v-btn>
             </div>
              <v-spacer></v-spacer>
            </v-row>
           
          </div>
        </v-card-text>

        <v-divider></v-divider>

       
      </v-card>
    </v-dialog>
        
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-btn dark to="/drive/upload" small   class="text-caption font-weight-bold" rounded color="black">Upload New File</v-btn>
      </v-row>
      
      <v-row class="" no-gutters align="center" justify="center">
       <v-col cols="12" xl="4" lg="4">
        <v-icon  @click="move" size="200">mdi-folder</v-icon>
       </v-col>
       <v-col cols="12" xl="4" lg="4">
         <v-icon @click="move" size="200">mdi-folder</v-icon>
       </v-col>
       <v-col cols="12" xl="4" lg="4">
         <v-icon @click="move" size="200">mdi-folder</v-icon>
       </v-col>
      </v-row>
     
     <v-row class="mt-2" v-if="bucket!==''" no-gutters>
        <p style="font-weight:bold;font-size:12px">New Files</p>
        <v-spacer></v-spacer>
        <v-btn small rounded color="grey" :to="{path:`/drive/bucket/${bucket}`}" outlined style="text-transform:none">View More</v-btn>
     </v-row>
     
      <v-row align="center" justify="center" style="height:40vh"   v-if="$store.state.Buckets.length==0">
       <div>
         <p class="text-center"><v-icon color="grey lighten-2" size="50">mdi-folder-hidden</v-icon></p>
          <p class="text-center" >You have no bucket, Create one now </p>
       </div>
      </v-row>
      <v-row align="center" justify="center" style="height:40vh"   v-else-if="bucket==''">
       <div>
         <p class="text-center"><v-icon color="grey lighten-2" size="50">mdi-folder-hidden</v-icon></p>
          <p class="text-center" >Select a bucket from the dropdown  </p>
       </div>
      </v-row>
      <div v-else>
       <v-simple-table style="height:40vh;overflow-y:scroll" v-if="$store.state.Objects.length>0"   >
    <template  v-slot:default>
      
      <tbody >
        <tr
          v-for="item in $store.state.Objects" :key="item"
        >
          <td><v-icon>mdi-file-eye</v-icon></td>
          <td style="font-weight:bold;font-size:12px"><span style="color:blue" v-if="item.Key.split('.')[0].includes('/')">{{item.Key.split('.')[0]}}</span><span v-else>{{item.Key}}</span></td>
          <td style="font-size:12px;font-weight:bold">{{item.Size}}kb</td>
         
          <td style="font-size:12px;font-weight:bold;width: 130px;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;">{{new Date(Date.parse(item.LastModified)).toDateString()}}</td>
     <td><v-row no-gutters>
       <v-btn text icon><v-icon size="14">mdi-dots-horizontal</v-icon></v-btn>
       <v-btn text icon><v-icon size="14">mdi-plus</v-icon></v-btn>
     <v-btn text icon><v-icon size="14">mdi-share</v-icon></v-btn>
       </v-row></td>
     
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <div v-else>
     <v-row align="center" justify="center" style="height:40vh">
       <v-spacer></v-spacer>
       <v-progress-circular
      indeterminate
      
      color="primary"
    ></v-progress-circular>
    <v-spacer></v-spacer>
     </v-row>
  </div>
      </div>
  </div>
</template>

<script>

export default {
name:"Drive",
data(){
  return {
    bucket:"",
    loading:false,
    bucketname:"",
    dialog:false
    }
},
methods:{
  hello(){
    this.loading=true
    this.$store.commit("getObjects",this.bucket)
  },
  newBucket(){
    this.$store.commit("createBucket",this.bucketname)
    
    // this.dialog=false
  },
  move(){
    alert('move ')
  }
},
mounted(){
  this.$store.commit("getBuckets")
  this.$store.commit("setDialog",false)
  
}   
}
</script>

<style>

</style>