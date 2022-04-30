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
              v-model="user.email"
              type="email"
              class="form-control"
              placeholder="E-posta adresinizi giriniz"
            />
          </div>
          <div class="form-group">
            <label>Şifre</label>
            <input
              v-model="user.password"
              type="password"
              class="form-control"
              placeholder="Şifreniz..."
            />
          </div>
          <div class="button-container d-flex flex-column align-items-center">
            <button
              type="submit"
              :class="{ 'btn-success': isUser, 'btn-primary': !isUser }"
              class="btn btn-block mb-2"
            >
              {{ isUser ? "Giriş Yap" : "Giriş Yap" }}
            </button>
            <a href="#" @click.prevent="isUser=!isUser" class="text-secondary">
                            {{ isUser ? 'Üye değilim' : 'Üyeliğim var'}}
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
  methods: {
    onSubmit() {
      alert(this.user);
    },

  },

};
</script>
