<template>
    <ul class="pagenation">
        <li><button type="button" value="1" @click="[changePage($event), getList()]">1</button></li>
        <li><button type="button" value="2" @click="[changePage($event), getList()]">2</button></li>
        <li><button type="button" value="3" @click="[changePage($event), getList()]">3는 없긴함</button></li>
        <li><button type="button" value="4" @click="[changePage($event), getList()]">4는 없긴함</button></li>
    </ul>
    <span>지금 페이지 번호는? {{ page }}</span>
    <ul class="get-list">
        <li v-for="data in getList01.data" :key="data.id">
            <img :src="data.avatar" :alt="data.last_name + '프로필'" />
            <p>유저네임 : {{ data.first_name }},{{ data.last_name }}</p>
            <p>이메일 : {{ data.email }}</p>
        </li>
    </ul>
    
</template>
<style scope>
.get-list li{
    margin: 2rem 0;
    text-align:center;
}

.pagenation li{
    display: inline-block;
    margin: 0 1rem;
    text-align: center;
}
.pagenation button{
    width: auto;
    height: 2.5rem;
    padding: 0 1rem;
    border: 1px solid #000;
}
</style>
<script>
// axios 예제
export default {
    name: 'AxiosTest',
    components:{
    },
    data(){
        return{
            page: 1,
            getList01:{},
            testTxt:'안녕'
        }
    },
    mounted(){
        this.getList();
    },
    methods:{
        getList(){
            this.$axios.get(`https://reqres.in/api/users?page=`+ this.page)
            .then((res) => {          
                this.getList01 = res.data;        
            })        
            .catch((res) => {          
                console.error(res);        
            });
        },

        // page변경
        changePage(event) {
            this.page = event.target.value
        }
    },
}
</script>
