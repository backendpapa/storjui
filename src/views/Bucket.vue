<template>
  <div class="pa-3">
      
       <v-simple-table style="height:95vh;overflow-y:scroll" v-if="$store.state.Objects.length>0"   >
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
  <div v-else style="height:80vh" >
      <v-row style="height:100%">
          <v-spacer></v-spacer>
          <div>
              <p class=""></p>
          </div>
      </v-row>
  </div>
  </div>
</template>

<script>
export default {
mounted(){
    this.$commit("clearObject")
    this.$store.commit("getObjects",this.$route.params.bucket)
}
}
</script>

<style>

</style>