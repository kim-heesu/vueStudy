<template>
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
</style>
<script>
// axios 예제
export default {
    name: 'AxiosTest',
    components:{
    },
    data(){
        return{
            getList01:{},
            testTxt:'안녕'
        }
    },
    mounted(){
        this.getList();
    },
    methods:{
        getList(){
            this.$axios.get(`https://reqres.in/api/users?/page=2`)
            .then((res) => {          
                this.getList01 = res.data;        
            })        
            .catch((res) => {          
                console.error(res);        
            });
        }
    },
}
</script>
