
<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-md-6 offset-3">
        <form @submit.prevent="handleSubmit">
          <h3>Şifre Yenileme</h3>
          <div class="form-group">
            <label>Kullandığınız Şifre</label>
            <input
            @blur="$v.oldpassword.$touch()"
              type="password"
              class="form-control"
              v-model="oldpassword"
              placeholder="Yeni Şifreniz"
            />
              <small
                v-if="!$v.oldpassword.required"
                class="form-text text-danger"
              > Bu alanın doldurulması zorunludur </small>
          </div>
          
          <div class="form-group">
            <label>Şifre</label>
            <input
             @blur="$v.password.$touch()"
              type="password"
              class="form-control"
              v-model="password"
              placeholder="Yeni Şifreniz"
            />
            <small v-if="!$v.password.required" class="form-text text-danger">
                Bu alanın doldurulması zorunludur.
              </small>
              <small
                v-if="!$v.password.minLength"
                class="form-text text-danger">
                Şifreniz en az 4 karakterden oluşmalıdır.
              </small>
          </div>
          <div class="form-group">
            <label>Şifre(tekrar) </label>
            <input
            @blur="$v.passwordConfirm.$touch()"
              type="password"
              class="form-control"
              v-model="passwordConfirm"
              placeholder="Şifreniz(tekrar)"
            />
            <small v-if="!$v.passwordConfirm.required" class="form-text text-danger">
                Bu alanın doldurulması zorunludur.
              </small>
          </div>
          <button class="btn btn-primary btn-block">Kaydet</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { required, sameAs, minLength } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  name: "changepassword",
  data() {
    return {
      password: "",
      passwordConfirm: "",
      oldpassword: "",
    };
  },
  methods: {
    handleSubmit() {
      const response = axios.post(
        "https://dev-smoothie-api.fintechyazilim.com/user/ChangePassword",
        {
          password: this.password,
          passwordConfirm: this.passwordConfirm,
          oldpassword: this.oldpassword,
          token: this.$route.params.token,
        }
      );
      console.log(response);
      this.$router.push("/login");
    },
  },
  validations: {
    password: {
      String,
      required,
      minLength: minLength(4),
    },
    oldpassword: {
      required,
    },
    passwordConfirm: {
      required,
      sameAs: sameAs("password"),
    },
  },
};
</script>


