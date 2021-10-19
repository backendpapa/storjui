import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
})],
  state: {
    credentials:{secret:"",access:"",endpoint:"",region:""},
    auth:false,
    Buckets:[],
    Objects:[],
    status:false,
    dialog:false
  },
  mutations: {
    setCredentials(state,keys){
      state.credentials=keys
    },
    setAuth(state,auth){
      state.auth=auth
    },
    getBuckets(state){
      
      axios.post("https://stor3end.herokuapp.com/listbuckets",state.credentials).then(result=>{
        state.Buckets=result.data.Buckets
      }).catch(err=>{
        console.log(err)
      })
      
    },
    getObjects(state,bucket){
      state.Objects=[]
      axios.post("https://stor3end.herokuapp.com/listobjects",{...state.credentials,bucket_name:bucket}).then(res=>{
        state.Objects=res.data.Contents
      }).catch(err=>{
        console.log(err)
      })
    },
    createBucket(state,name){
      axios.post('https://stor3end.herokuapp.com/bucket/new',{...state.credentials,bucket_name:name}).then(res=>{
        console.log(res.data)
        
        axios.post("https://stor3end.herokuapp.com/listbuckets",state.credentials).then(result=>{
        state.Buckets=result.data.Buckets
        state.status=true
        setTimeout(() => {
          state.status=false
          
            state.dialog=false
       
        }, 3000);
      }).catch(err=>{
        console.log(err)
      })
      }).catch(err=>{
        console.log(err)
      })
    },
    setStatus(state,val){
      state.status=val
    },
    setDialog(state,val){
      state.dialog=val
    },
    clearObject(state){
      state.Objects=[]
    }
  },
  actions: {
  },
  modules: {
  }
})
