<template>
    <header>
        <div class="inner">
            <h1 class="logo"><router-link to="/">난 로고</router-link></h1>
            <Nav />
        </div>
    </header>
</template>

<script>
import Nav from '@/components/Navigator.vue';
export default {
    name: 'Header',
    components: {
        Nav,
    }
}
</script>

<style scoped>
header{
    border-bottom: 1px solid #ddd;
}
header .inner{
    display: flex;
    gap: 3rem;
    align-items: center;
    padding: 1rem;
}
.logo{
    font-size: 2.5rem;
    font-weight: 700;
}
</style>
