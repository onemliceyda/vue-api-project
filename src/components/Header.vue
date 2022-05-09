<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow mb-5">
      <a class="navbar-brand" href="#">Giriş Ekranı</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link class="nav-item" tag="li" to="/">
            <a class="nav-link" href="#">Anasayfa</a>
          </router-link>
          <router-link class="nav-item" tag="li" to="/changepassword">
            <a class="nav-link" href="#">Şifre Değiştir</a>
          </router-link>
        </ul>
        <ul
          class="navbar-nav my-2 my-lg-0 justify-content-center align-items-center d-flex text-white"
          :class="logoutClass"
        >
          <div class="badge">
            Hoşgeldin, Ceyda Önemli
          </div>
          <li class="nav-item">
            <a
              @click.prevent="logout"
              class="nav-link border-white border rounded text-white"
              href="#"
            >
              Çıkış Yap
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.commit("logoutMutation");
      this.$router.push("/login");
    }
  },
  computed: {
    logoutClass() {
      return {
        "d-none": false
      };
    }
  }
};
</script>
