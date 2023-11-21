<template>
    <div class="hello02">
        HellowVue02
    </div>
</template>

<script>
export default {
    name: 'HelloVue',
    components:{ },
    data(){
        return{}
    },
    methods:{
        consoleTest(){
            console.log('안녕')
        }
    },
    mounted(){
        // 메소드에서 작성한 함수는 mounted에 실행한다 
        // 하지만 뷰의 생명주기에 따라 달라질 수 있다.
        this.consoleTest();
    }
}
</script>

<!-- style scoped 란 해당 vue파일안에서만 쓸 스타일 -->
<style scoped>
.hello02{background: pink; padding: 2rem 0; margin: 2rem 0;}
</style>
