<template>
  <div class="message-form ld-over">
     
    <b-form @submit.prevent="onSubmit" >
      <div class="ld ld-ring ld-spin"></div>
      
      <b-form-group>
        <b-form-input id="message"
                      type="text"
                      v-model="message"
                      placeholder="Enter Message"
                      autocomplete="off"
                      required>
        </b-form-input>
      </b-form-group>
      <div class="clearfix">
        <b-button type='submit' variant="primary" class="float-right">
          Send
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import {  mapGetters } from 'vuex'

export default  {
  name: 'MessageForm',
  data() {
    return {
      message: ''
    };
  },
  
  computed: mapGetters([
    'getSocket']
    
  ), 
   methods :{
     onSubmit(){ 
      this.getSocket.emit('private message',(message)=>{
      console.log(message)
       })
       this.message =""
      //  console.log(state=>state.socket)  


}
},
mounted (){}
}
</script>