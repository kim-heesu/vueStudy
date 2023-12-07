<template>
  <div class="content-wrap member">
    <div class="inner">
      <h2>회원가입</h2>
      <form class="form-style01">
        <!-- <div class="form-box">
          <label class="form-tit" for="joinId" >아이디</label>
          <input type="text" id="joinId" v-model="joinId" placeholder="아이디를 입력하세요" />
        </div> -->
        <div class="form-box">
          <label class="form-tit" for="joinPw">비밀번호</label>
          <input type="password" id="joinPw" v-model="joinPw" autocomplete="off" placeholder="비밀번호를 입력하세요" />
        </div>
        <div class="form-box">
          <label class="form-tit" for="joinEmail">이메일</label>
          <input type="text" id="joinEmail" v-model="joinEmail" placeholder="이메일을 입력하세요" />
        </div>
        <div class="btn-wrap">
          <button type="button" class="btn btn-green-bg" @click="register()">회원가입</button>
          <router-link to="/member/login" class="btn btn-green">계정이 있나요?</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Join',
  data() {
      return {
        joinPw: 'test',
        joinEmail: 'eve.holt@reqres.in',
      };
  },
  components: {},
  mounted() {
    
  },
  methods: {
      register() {
          this.$axios
              .post(`https://reqres.in/api/register`,{
                email: this.joinPw,
                password: this.joinEmail
              })
              .then((res) => {
                  console.log(res)
              })
              .catch((res) => {
                  console.error(res);
              });
      },
  },
};
</script>
