<template>
  <div class="container">
    <div class="row mt-5 p-5">
      <div
        class="col-md-8 offset-2 card card-primary p-3 border border-primary"
      >
        <h3 class="text-primary text-center mb-3 mt-3">
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
            <small
              v-if="!$v.user.password.required"
              class="form-text text-danger"
            >
              Giriş yapmak için şifrenizi eksiksiz bir şekilde girmelisiniz.
            </small>
          </div>
          <div class="button-container d-flex flex-column align-items-center">
            <button
              type="submit"
              class="btn btn-primary btn-block mb-2"
              :disabled="$v.$invalid"
            >
              Giriş Yap
            </button>

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
import AuthService from "../../services/AuthService";
import jwt_decode from "jwt-decode";
import alert from "../../alert.js";
export default {
  data() {
    return {
      user: {
        email: null,
        password: null
      },
      isUser: true
    };
  },
  validations: {
    user: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  methods: {
    onSubmit() {
      AuthService.Login(this.user.email, this.user.password)
        .then(response => {
          if (response.data.IsSuccess == true || response.data.IsSuccess == 1) {
            //bu login olsaydı dönen token,kullanıcı bilgisi vs store'a yazılabilirdi.
            let responseDecodedToken = jwt_decode(
              response.data.Result.AccessToken
            );
            this.$store.commit("loginMutation", {
              email: responseDecodedToken.email,
              name: responseDecodedToken.name,
              role: responseDecodedToken.role,
              token: response.data.Result.AccessToken
            });
            alert.loginSuccess()

            this.$router.push("/");
          } else {
            console.log(response.data.Result);
            alert.loginError()
          }
          localStorage.setItem("token");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
