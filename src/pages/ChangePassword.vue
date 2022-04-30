
<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-md-6 offset-3">
        <form @submit.prevent="handleSubmit">
          <h3>Şifre Yenileme</h3>
          <div class="form-group">
            <label>Şifre</label>
            <input
              type="password"
              class="form-control"
              v-model="password"
              placeholder="Yeni Şifreniz"
            />
          </div>
          <div class="form-group">
            <label>Şifre(tekrar) </label>
            <input
              type="password"
              class="form-control"
              v-model="passwordConfirm"
              placeholder="Şifreniz(tekrar)"
            />
          </div>
          <button class="btn btn-primary btn-block">Kaydet</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
import axios from "axios";
export default {
name:"changepassword",
data(){
  return {
    password:"",
    passwordConfirm:""
  }
},
methods:{
  handleSubmit(){
    const response=axios.post("changepassword",{
      password:this.password,
      passwordConfirm: this.passwordConfirm,
      token:this.$route.params.token
    });
    console.log(response)
    this.$router.push("/login")
  }
},
 validations: {
      email: {
        required,
        email,
      },
   }
}
</script>


