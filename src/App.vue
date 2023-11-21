<template>
    <div class="wrap">
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App', // 해당 파일의 name을 지정
    components: {
        Header,
        Footer
    }
}
</script>

<!-- 기본구조 = .content-wrap > inner > ~ 내부에 들어갈 내용 ~ -->

<style>

    .content-wrap{padding: 2rem; font-size: 2rem;} 
</style>