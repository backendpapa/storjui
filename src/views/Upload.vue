<template>
  <div class="pa-4">
      <p class="text-h5">File Upload</p>
      <br>
      <v-row no-gutters  justify="center" style="height:80vh;">
            <v-col style="" cols="12" xl="4" lg="4" class="pa-2">
                <v-row @drop="dragFile" align="center" justify="center"  class="" no-gutters style="height:50vh;border:1px dashed grey;">
                    <div style="position:absolute">
                        <p class="text-center" ><v-icon size="55">mdi-cloud-upload-outline</v-icon></p>
                        <p class="text-center">Drop your files or  <br><span class="font-weight-bold grey--text">Browse file</span></p>
                    </div>
                   <div style="height:100%">
                       
                        <input name="fileToUpload" style="opacity:0;height:100%"  type="file"  multiple @change="uploadFile"/>
                       
                   </div>

                </v-row>
            </v-col>
           
            <v-col cols="12" xl="4" lg="4" class="pa-2">
                <div class="mb-4">
                    <p class="" style="font-size:14px">You can choose to upload more than one file at a time. Make sure each file does not exceed 500mb </p>
                    <v-textarea solo style="font-size:12px" height="15vh" flat placeholder="Add comments"  class="" ></v-textarea>
                    <v-row no-gutters>
                        <v-btn :disabled="File.length && bucket!==''?false:true" rounded @click="upload"  color="black"  class="mr-1 white--text" style="text-transform:none">Upload</v-btn>
                        <v-btn rounded  text color="black" dark class="" style="text-transform:none">Cancel</v-btn>
                        <v-spacer></v-spacer>
                    </v-row>
                </div>
                <v-divider style="opacity:0.5;"></v-divider>
                <div class="mt-4">
                    <p style="font-weight:bold" class="mb-1">UPLOADS</p>
                    <p class="mb-n0" style="font-size:10px" v-if="File.length">{{File.length}} Files Selected</p>
                     <v-list flat color="transparent" v-if="File.length" style="overflow-y:scroll;height:30vh">
                            <v-list-item
                            v-for="file in File" :key="file"
                            link
                            >
                            <v-list-item-icon>
                                <v-icon>mdi-file</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title style="font-size:12px;font-weight:semi-bold" class="">{{file.name}}</v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                        </v-list>

                  
                </div>
            </v-col>
             <v-col cols="12" xl="4" lg="4" class="pa-2">
                 
                <v-select
          :items="$store.state.Buckets"
          label="Select Bucket"
          v-model="bucket"
          item-text="Name"
          dense
          outlined
          solo
          flat
        ></v-select>
        
         <div v-if="dialog==true"    style="height:40vh;margin-top:30px">
             <p style="font-weight:bold">UPLOADING FILES</p>
                {{count}} of {{File.length}} uploading
                <v-progress-linear
      color="cyan darken-2 "
      rounded
      height="30"
         stream
      :value="value"
    ></v-progress-linear>
     
            </div>
            </v-col>
      </v-row>
       <v-dialog
        v-model="success"
      persistent
      width="500"
    >
     
      <v-card style="height:60vh;">
       
         <v-row no-gutters class="pt-2">
             <v-spacer></v-spacer>
              <p class="text-center"><v-img width="230" src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/170/000000/external-tick-user-interface-flatart-icons-flat-flatarticons.png"/></p>
              <v-spacer></v-spacer>
         </v-row>
         <p class="text-center">File Uploaded successfully</p>
        <p class="text-center"> <v-btn @click="completeUpload" large width="140" style="text-transform:none" rounded color="black" dark>Done</v-btn></p>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            File:[],
            bucket:"",
            count:0,
            dialog:false,
            value:0,
            success:false
        }
    },
    methods:{
        uploadFile(e) {
        this.File = e.target.files;
      },
      dragFile(e) {
        this.File = e.dataTransfer.files;
      },
      async upload(){
          this.dialog=true
          let formData = new FormData();
        for(var i=0;i<this.File.length;i++){
            formData.append('bucket_name',this.bucket)
            formData.append('access',this.$store.state.credentials.access)
            formData.append('secret',this.$store.state.credentials.secret)
            formData.append('endpoint',this.$store.state.credentials.endpoint)
            formData.append('region',this.$store.state.credentials.region)
            formData.append('filetoupload', this.File[i]);
            
                
                this.count+=1
                this.value=(this.count/this.File.length)*100
            await axios.post('https://stor3end.herokuapp.com/upload',formData).then(res=>{
                
            
                console.log(res.data)
                
            }).catch(err=>{
                console.log(err)
            })
            if(this.count==this.File.length){
                    this.success=true
                   
                }
        }

      },
      completeUpload(){
          this.success=false;
          this.value=0;
          this.count=0;

        //   Add all recommits here
        this.$store.commit("getBuckets")


        // move back to drive
        this.dialog=false;
        this.$router.push('/drive')
      }
    },
    mounted(){
        this.$store.commit("getBuckets")
    }
}
</script>

<style>

</style>