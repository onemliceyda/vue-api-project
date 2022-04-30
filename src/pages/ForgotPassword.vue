<template>
  <form @submit.prevent="handleSubmit">
    <h3>Şifremi Unuttum</h3>
   <div class="form-group">
       <label>E-mail</label>
    <input type="email" class="form-control" v-model="email" placeholder="E-mail adresiniz"/>
  </div>
  <button type="submit" class="btn btn-primary">Gönder</button>
  </form>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import axios from "axios"
export default {
  name: "forgotpassword",
  data(){
      return{
          email:""
      }
  },
  methods:{
handleSubmit(){
         const response = axios.post('forgotpassword',{
             email:this.email
         });
    console.log(response)
      }
  },
   validations: {
      email: {
        required,
        email,
      },
   }
};
</script>