<template>
  <ul class="pagenation">
    <li v-for="num in getList01.total_pages" :key="num">
      <button type="button" :value="num" @click="[changePage($event), getList()]">{{ num }}</button>
    </li>
    <li><button type="button" value="3" @click="[changePage($event), getList()]">page넘버가 현재 호출된 리스트의 total_pages보다 크면?</button></li>
  </ul>
  <span>지금 페이지 번호는? {{ page }}</span>
  <ul class="get-list">
    <!-- v-for 와 v-if 는 동시에 쓸수없다. template 태그를 사용하여 분기처리 -->
    <template v-if="getList01.total_pages >= getList01.page">
      <li v-for="data in getList01.data" :key="data.id">
        <div class="img-wrap">
          <img :src="data.avatar" :alt="data.last_name + '프로필'" />
        </div>
        <p>유저네임 : {{ data.first_name }},{{ data.last_name }}</p>
        <p>이메일 : {{ data.email }}</p>
      </li>
    </template>
    <template v-else>
      <li class="list-empty"><p>결과가 없습니다.</p></li>
    </template>
  </ul>
</template>
<style scope>
.get-list{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
}
.get-list li {
  margin: 2rem 0;
  text-align: center;
  border: 1px solid #006900;
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
}

.get-list li .img-wrap{
  width: 100%;
  max-width: 150px;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 0.5rem;
  margin: 0 auto;
  margin-bottom: 0.5rem;
}
.get-list li .img-wrap img{
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pagenation li {
  display: inline-block;
  margin: 0 1rem;
  text-align: center;
}
.pagenation button {
  width: auto;
  height: 2.5rem;
  padding: 0 1rem;
  border: 1px solid #000;
}
.list-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30rem;
  font-weight: 800;
}
.list-empty p::before {
  content: 'ㅠ,ㅠ';
  display: block;
  margin-bottom: 1rem;
}
</style>
<script>
// axios 예제
export default {
  name: 'AxiosTest',
  components: {},
  data() {
    return {
      page: 1,
      getList01: {},
      testTxt: '안녕',
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios
        .get(`https://reqres.in/api/users?page=` + this.page)
        .then((res) => {
          this.getList01 = res.data;
        })
        .catch((res) => {
          console.error(res);
        });
    },

    // page변경
    changePage(event) {
      this.page = event.target.value;
    },
  },
};
</script>
