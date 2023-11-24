<template>
  <header>
    <div class="inner">
      <h1 class="logo"><router-link to="/">Vue</router-link></h1>
      <Nav />
      <div class="user-box">
        <router-link to="/member/login" class="btn btn-green btn-login">로그인</router-link>
        <router-link to="/member/join" class="btn btn-green btn-join">회원가입</router-link>
      </div>
    </div>
  </header>
</template>

<script>
import Nav from '@/components/common/Navigator.vue';
export default {
  name: 'Header',
  components: {
    Nav,
  },
};
</script>

<style scoped>
header {
  border-bottom: 1px solid #ddd;
}
header .inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  padding: 1rem;
}
.logo {
  font-size: 3rem;
  font-weight: 800;
  color: #006900;
}
.user-box {
  margin-left: auto;
}
.user-box > * {
  padding: 0.8rem 1.2rem;
  margin: 0 0.5rem;
  font-size: 1.3rem;
  font-weight: 600;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
}
</style>
