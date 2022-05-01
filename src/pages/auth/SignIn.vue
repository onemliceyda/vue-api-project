<template>
  <div class="container">
    <div class="row mt-5">
      <div
        class="col-md-4 offset-4 card card-primary p-3 border"
        :class="{ 'border-success': isUser, 'border-primary': !isUser }"
      >
        <h3
          :class="{ 'text-success': isUser, 'text-primary': !isUser }"
          class="text-center mb-3 mt-3"
        >
          Giriş Yap
        </h3>
        <hr />
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label>E-posta Adresiniz</label>
            <input
              @blur="$v.user.email.$touch()"
              v-model="user.email"
              type="email"
              class="form-control"
              placeholder="E-posta adresinizi giriniz"
            />
            <small v-if="!$v.user.email.required" class="form-text text-danger">
              Lütfen e-mail adresinizi eksiksiz bir şekilde giriniz.
            </small>
            <small v-if="!$v.user.email.email" class="form-text text-danger">
              Lütfen geçerli formatta bir e-mail adresi giriniz
            </small>
          </div>
          <div class="form-group">
            <label>Şifre</label>
            <input
              @blur="$v.user.password.$touch()"
              v-model="user.password"
              type="password"
              class="form-control"
              placeholder="Şifreniz..."
            />
            <small v-if="!$v.user.password.required" class="form-text text-danger">
              Giriş yapmak için şifrenizi eksiksiz bir şekilde girmelisiniz.
            </small>
          </div>
          <div class="button-container d-flex flex-column align-items-center">
            <button
              type="submit"
              :class="{ 'btn-success': isUser, 'btn-primary': !isUser }"
              class="btn btn-block mb-2"
              :disabled="$v.$invalid"
            >
              {{ isUser ? "Giriş Yap" : "Kayıt Ol" }}
            </button>
            <a
              href="#"
              @click.prevent="isUser = !isUser"
              class="text-secondary"
            >
              {{ isUser ? "Üye değilim" : "Üyeliğim var" }}
            </a>
            <p class="forgot-password text-right">
              <router-link to="forgotpassword">Şifremi Unuttum</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      isUser: true,
    };
  },
  validations: {
    user: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    onSubmit() {
  //bu kısım da diğerinde olduğu gibi yazılacak->forgot password'a bak 
    },
  },
};
</script>
