<template>
  <div class="content-wrap member">
    <div class="inner">
      <h2>로그인</h2>
      <form class="form-style01">
        <!-- <div class="form-box">
          <label class="form-tit" for="loginId">아이디</label>
          <input type="text" id="loginId" placeholder="아이디를 입력하세요" />
        </div> -->
        <div class="form-box">
          <label class="form-tit" for="updateName">이름</label>
          <input type="password" id="updateName" v-model="updateName" autocomplete="off" placeholder="이름을 입력하세요" />
        </div>
        <div class="form-box">
          <label class="form-tit" for="updateJob">직업</label>
          <input type="text" id="updateJob" v-model="updateJob" placeholder="직업을 입력하세요" />
        </div>
        <div class="btn-wrap">
          <button type="button" class="btn btn-green-bg" @click="updatePut()">업데이트</button>
          <router-link to="/member/join" class="btn btn-green">계정이 없나요?</router-link>
          {{ userNum }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// axios 예제
export default {
  name: 'Login',
  data() {
      return {
        updateName: 'morpheus',
        updateJob: 'zion resident',
        userNum: this.$route.query.user
      };
  },
  components: {},
  mounted() {
    
  },
  methods: {
      updatePut() {
          this.$axios
              .put(`https://reqres.in/api/user/`+this.userNum,{
                "name": this.updateName,
                "job": this.updateJob
              })
              .then((res) => {
                  console.log(res)
                  alert('업데이트되었습니다, 업데이트 일시' + res.data.updatedAt)
              })
              .catch((res) => {
                  console.error(res);
              });
      },
  },
};
</script>
