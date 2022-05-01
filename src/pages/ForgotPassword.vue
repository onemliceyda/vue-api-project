<template>
  <form @submit.prevent="handleSubmit">
    <h3>Şifremi Unuttum</h3>
    <div class="form-group">
      <label>E-mail</label>
      <input
        @blur="$v.email.$touch()"
        type="email"
        class="form-control"
        :class="{ 'is-invalid': $v.email.$error }"
        v-model="email"
        placeholder="E-mail adresiniz"
      />
      <small v-if="!$v.email.required" class="form-text text-danger"
        >Lütfen email adresinizi giriniz.</small
      >
      <small v-if="!$v.email.email" class="form-text text-danger"
        >Lütfen geçerli bir email adresi giriniz.</small
      >
    </div>
    <button type="submit" class="btn btn-primary" :disabled="$v.$invalid">
      Gönder
    </button>
  </form>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import axios from "axios";
import AuthService from "../services/AuthService"
export default {
  name: "forgotpassword",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    handleSubmit() {
      AuthService.ForgotPassword(this.email)
        .then((response) => {
          if (response.data.IsSuccess == true || response.data.IsSuccess == 1) {
            //bu login olsaydı dönen token,kullanıcı bilgisi vs store'a yazılabilirdi.
            console.log("Giriş sağlandı.");
          } else {
            console.log(error);
          }
        });
    },
  },
  validations: {
    email: {
      required,
      email,
    },
  },
};
</script>