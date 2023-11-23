<template>
    <footer>
        <div class="inner">
            <router-link to="/" class="f-logo">난 푸터다</router-link>
            <address>
                대표이사 김히수<br>
                사업자 번호 : 123-45-678910<br>
                통신판매업 신고번호 : 제 2023-서울마포-1311호 <br>
                주소 : 서울특별시 마포구 와우산로29길 42, 1층(서교동)<br>
                E-mail : help@ggultoons.com<br>
                고객센터: 1533-1436
            </address>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
    background: #f8f8f8;
    padding: 2rem 0;
    border-top: 1px solid #ddd;
}
.f-logo{
    font-size: 2.5rem;
    font-weight: 800;
}
address{
    margin-top: 1.5rem;
    font-size: 1.2rem;
    color: #666;
    line-height: 1.4;
}
</style>
